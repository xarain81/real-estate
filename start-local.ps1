[CmdletBinding()]
param(
  [switch]$NoBrowser
)

$ErrorActionPreference = "Stop"

$projectRoot = $PSScriptRoot
$port = 4175
$url = "http://127.0.0.1:$port/"

function Get-LocalListener {
  Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue |
    Select-Object -First 1
}

$existingListener = Get-LocalListener

if ($existingListener) {
  Write-Host "Reel Estate Singapore is already running at $url"
  Write-Host "Server process ID: $($existingListener.OwningProcess)"

  if (-not $NoBrowser) {
    Start-Process $url
  }

  exit 0
}

$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodeExecutable = if ($nodeCommand) {
  $nodeCommand.Source
} else {
  Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
}

if (-not (Test-Path -LiteralPath $nodeExecutable)) {
  throw "Node.js was not found. Install Node.js 24 LTS or run this project from a configured development environment."
}

$viteExecutable = Get-ChildItem `
  -Path (Join-Path $projectRoot "node_modules\.pnpm\vite@*\node_modules\vite\bin\vite.js") `
  -File `
  -ErrorAction SilentlyContinue |
  Select-Object -First 1

if (-not $viteExecutable) {
  throw "Vite is not installed. Install the project dependencies before running this launcher."
}

$stdoutLog = Join-Path $env:TEMP "reel-estate-vite.stdout.log"
$stderrLog = Join-Path $env:TEMP "reel-estate-vite.stderr.log"

$serverProcess = Start-Process `
  -FilePath $nodeExecutable `
  -ArgumentList @(
    $viteExecutable.FullName,
    "--host", "127.0.0.1",
    "--port", $port
  ) `
  -WorkingDirectory $projectRoot `
  -WindowStyle Hidden `
  -RedirectStandardOutput $stdoutLog `
  -RedirectStandardError $stderrLog `
  -PassThru

$listener = $null

for ($attempt = 0; $attempt -lt 40; $attempt++) {
  Start-Sleep -Milliseconds 250
  $listener = Get-LocalListener

  if ($listener) {
    break
  }

  if ($serverProcess.HasExited) {
    $errorDetails = Get-Content -Raw $stderrLog -ErrorAction SilentlyContinue
    throw "The development server stopped before opening the port. $errorDetails"
  }
}

if (-not $listener) {
  throw "The development server did not become available at $url. Review $stderrLog."
}

Write-Host "Reel Estate Singapore is running at $url"
Write-Host "Server process ID: $($listener.OwningProcess)"
Write-Host "Stop it later with: Stop-Process -Id $($listener.OwningProcess)"

if (-not $NoBrowser) {
  Start-Process $url
}
