---
name: Reel Estate Singapore
description: A calm editorial property experience connecting curated listings with conversational discovery.
colors:
  ink: "#111310"
  paper: "#ffffff"
  muted-ink: "#5f655f"
  quiet-ink: "#687068"
  hairline: "#dfe3df"
  soft-surface: "#f4f6f3"
  listing-surface: "#fafbf9"
  verdant: "#205d35"
  verdant-deep: "#174629"
  focus-green: "#67a579"
  filter-border-hover: "#a8afa8"
  control-border-hover: "#b2b9b2"
typography:
  display:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "clamp(3.4rem, 4.25vw, 4.25rem)"
    fontWeight: 690
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "clamp(2.7rem, 4.3vw, 4.75rem)"
    fontWeight: 690
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "clamp(2rem, 3.2vw, 3.5rem)"
    fontWeight: 670
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "0.82rem"
    fontWeight: 650
    lineHeight: 1
  small:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.35
  filter-label:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "0.74rem"
    fontWeight: 600
    lineHeight: 1
  micro:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "0.62rem"
    fontWeight: 650
    lineHeight: 1
  card-title:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "clamp(1rem, 1.35vw, 1.15rem)"
    fontWeight: 670
    lineHeight: 1.25
  card-price:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "clamp(1.15rem, 1.7vw, 1.45rem)"
    fontWeight: 700
    lineHeight: 1
  dialog-title:
    fontFamily: '"Manrope Variable", Manrope, sans-serif'
    fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)"
    fontWeight: 670
    lineHeight: 1.15
rounded:
  micro: "0.16rem"
  inline: "0.25rem"
  control: "0.3rem"
  panel: "0.75rem"
  card: "0.875rem"
  modal: "1rem"
  pill: "999px"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  page-gutter: "clamp(1.25rem, 4.2vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.verdant}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.35rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.verdant-deep}"
    textColor: "{colors.paper}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.35rem"
    height: "2.75rem"
  assistant-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(2rem, 5vw, 4rem)"
  filter-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted-ink}"
    typography: "{typography.filter-label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.8rem"
    height: "2.75rem"
  filter-pill-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  property-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  property-dialog:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.modal}"
    width: "min(100%, 50rem)"
---

# Design System: Reel Estate Singapore

## Overview

**Creative North Star: "The Verdant Property Edit"**

Reel Estate Singapore feels like a composed residential editorial in which a tightly curated property edit leads naturally into conversation. True-white space, near-black Manrope typography, thin neutral rules, a quiet verdant accent, and decisive tropical residence imagery create a premium Singapore setting without theatrical luxury cues.

The system is spacious but not ornamental. Large type establishes confidence, strict alignment and hairlines organize long-form information, and green appears selectively at moments of action, wayfinding, and system emphasis. The result should remain professional, calm, and immediately usable on both wide and narrow screens.

**Key Characteristics:**

- True-white editorial surfaces with near-black, tightly set grotesk headings.
- Verdant green reserved for action, links, focus, and selective emphasis.
- Hairline rules and tonal panels provide structure without decorative chrome.
- A single elevated listing-card family provides a tactile browsing moment between flat editorial bands.
- Split editorial compositions collapse into clear single-column reading order.
- Tropical residential photography supplies warmth and specificity.

## Colors

The palette is nearly monochrome, with restrained verdant notes connecting the property setting to interactive moments.

### Primary

- **Verdant Action** (`verdant`): Used for the principal assistant call to action, links, connectors, and selected integration emphasis.
- **Deep Canopy** (`verdant-deep`): The darkened interactive state for both green and near-black buttons.

### Neutral

- **Editorial Ink** (`ink`): Primary headings, wordmark, structural connectors, and the dark button.
- **True Paper** (`paper`): The page canvas, primary panels, and reversed button text.
- **Measured Gray** (`muted-ink`): Explanatory body copy that should recede from headings without losing clarity.
- **Quiet Gray** (`quiet-ink`): Privacy notes, metadata, and tertiary supporting text.
- **Hairline Gray** (`hairline`): Section dividers, panel outlines, and repeated row separators.
- **Tonal Mist** (`soft-surface`): Configuration and lessons surfaces that need separation without elevation.
- **Listing Mist** (`listing-surface`): The subtly warm-white property-edit band that distinguishes browsing from the true-white editorial sections.
- **Accessible Fern** (`focus-green`): Keyboard focus outlines.
- **Filter Edge** (`filter-border-hover`): The slightly stronger neutral border used when an unselected listing filter is hovered.
- **Control Edge** (`control-border-hover`): The stronger neutral border used on the dialog close control at hover.

### Named Rules

**The Verdant Restraint Rule.** Green marks action, focus, flow, or a deliberately selected surface; it is not a general-purpose fill.

**The True Paper Rule.** Keep the dominant canvas true white so typography, rules, and the residence image carry the visual hierarchy.

## Typography

**Display Font:** Manrope Variable (with Manrope and sans-serif fallbacks)
**Body Font:** Manrope Variable (with Manrope and sans-serif fallbacks)

**Character:** A single contemporary grotesk creates cohesion. High-weight, tightly tracked headings feel architectural; lighter, generously led body copy keeps the experience conversational and calm.

### Hierarchy

- **Display** (weight 690, fluid display scale, line-height 0.98): Hero promise only, balanced to a compact measure.
- **Headline** (weight 690, fluid headline scale, line-height 1.02): Major section introductions and assistant framing.
- **Title** (weight 670, fluid title scale, line-height 1.05): Project-story topics and strong panel messages.
- **Body** (weight 400, base reading scale, line-height 1.7): Explanations, descriptions, and instructions, generally constrained to readable line lengths.
- **Label** (weight 650, compact label scale, line-height 1): Buttons, navigation, and concise control language.

### Named Rules

**The Architectural Type Rule.** Use tight tracking and near-solid leading for large headings; restore open leading and muted color for sustained reading.

**The One-Family Rule.** Maintain hierarchy through weight, scale, spacing, and color within Manrope rather than introducing a decorative companion face.

## Layout

The page uses full-width editorial bands with a fluid outer gutter (`page-gutter`). Desktop compositions are asymmetrical: the hero favors the residence image, the listing edit uses a three-column card grid, the assistant gives the embedded experience more width than its introduction, and paired story topics divide the canvas evenly. Long sections are separated by single-pixel hairlines rather than cards floating inside a universal container.

At the wide breakpoint (1120px), paired story topics stack and assistant proportions tighten. The listing edit moves from three columns to two below 1000px. At the primary mobile breakpoint (820px), the hero and assistant become single-column, the image follows the hero action, and navigation moves to its own ruled row. At 520px, the listing edit becomes one column, navigation uses a two-column row, controls and typography tighten, diagrams remain horizontally scrollable, and footer content stacks.

Spacing follows a restrained progression from compact control insets through generous section pauses. Use the fluid page gutter consistently, keep related copy close, and let major changes in story or function earn the larger vertical intervals.

### Named Rules

**The Split-Then-Stack Rule.** Use asymmetrical editorial splits on wide screens, then preserve semantic reading order in a single column below 820px.

**The Full-Band Rule.** Structural sections meet at hairline boundaries across the canvas; do not wrap every section in an isolated card.

## Elevation & Depth

The system is flat by default. Depth comes from tonal layering, borders, image contrast, and occasional overlap—most visibly where the white hero copy fades over the edge of the photograph on wide screens. The property cards and their modal are the deliberate exception: cards use a two-layer soft shadow at rest (`0 2px 4px rgba(17, 19, 16, 0.06), 0 16px 36px rgba(17, 19, 16, 0.07)`) and deepen on hover or keyboard focus; the modal uses a stronger focus shadow (`0 28px 80px rgba(17, 19, 16, 0.3)`). Motion is similarly quiet: controls lift subtly on hover, listing imagery settles within its crop, and the hero image settles gently on entry when reduced motion is not requested.

### Shadow Vocabulary

- **Listing Card:** A low, diffuse two-layer shadow that makes the card family the sole tactile browsing surface.
- **Listing Card Active:** A deeper two-layer shadow paired with a three-pixel lift on card hover or internal keyboard focus.
- **Property Dialog:** A broad shadow that separates the focused details surface from its dark scrim.

### Named Rules

**The Flat-by-Design Rule.** Surfaces remain flat at rest; use a hairline, a soft tonal shift, or composition before introducing elevation.

**The Quiet Motion Rule.** State changes are brief and restrained, and every nonessential animation yields to reduced-motion preferences.

## Shapes

Forms are predominantly square and architectural. Hairline-bordered diagrams use sharp corners, buttons receive only a small control radius, inline code and checklist marks use micro-rounding, and the assistant shell receives the panel radius. Property cards use a controlled 14-pixel radius and filter controls use pills to distinguish interactive selection from editorial structure. Photography is clipped cleanly to its layout region without decorative masks.

**The Radius-by-Function Rule.** Use generous radii only for bounded interactive surfaces: the assistant panel, property cards, modal, and pill filters. Keep editorial structures square and use smaller radii for ordinary controls and inline elements.

## Components

### Buttons

Compact, weighty controls make the next conversational action unmistakable.

- **Shape:** Gently eased rectangular control using the control radius and a minimum 2.75rem height.
- **Primary:** Verdant fill with true-white label text and compact horizontal padding.
- **Dark:** Editorial-ink fill with true-white label text, used for the header call to action.
- **Hover / Focus:** Both variants shift to Deep Canopy and lift two pixels; keyboard focus uses the Accessible Fern outline with a four-pixel offset.

### Chips

Compact property filters behave as selection controls, not decorative tags.

- **Style:** True-paper pills with a Hairline Gray border, compact Manrope labels, and a 2.75rem minimum touch height.
- **State:** Unselected pills strengthen their border and lift one pixel on hover; the selected pill switches to Editorial Ink with true-white text and exposes state through `aria-pressed`.

### Cards / Containers

Containers are functional regions rather than decorative cards.

- **Corner Style:** Square for story diagrams; the assistant shell uses the panel radius; listing cards use a restrained 14-pixel radius.
- **Background:** True Paper by default; Tonal Mist for configuration and reflective content.
- **Shadow Strategy:** None for editorial structure; listing cards use one soft, offset elevation treatment without a competing border.
- **Border:** One-pixel Hairline Gray for panels and repeated separators, with stronger neutral strokes reserved for diagrams.
- **Internal Padding:** Compact diagram insets and generous fluid padding for assistant states.

### Property Listings

The property edit is a bounded browsing surface between the hero and assistant. District and bedroom controls are compact pills with a near-black selected state, cards use fixed 16:9 imagery, overlay classification badges, tabular price figures, and consistent fact rows, and the live result count updates without moving the reading order. Cards lift three pixels and gently scale their image on hover while keyboard focus on the internal details action produces the same card elevation. The details dialog is centered on wide screens and becomes a bottom sheet below 520px; it traps focus, closes by Escape, backdrop click, or explicit dismissal, and never invents data beyond the supplied records.

### Navigation

The header uses a compact uppercase wordmark, quiet sentence-case links, and a dark conversational CTA. Links shift to Verdant Action on hover. At narrow widths, navigation occupies a second, full-width row separated by a hairline so all destinations remain visible rather than collapsing behind an icon.

### Text Links

Inline actions use Verdant Action, a stronger weight, and an optional small stroked external-link icon. They remain text-first and do not acquire pill or chip styling.

### Flow and Integration Nodes

Process diagrams use sharp, hairline-outlined nodes with compact strong titles and muted details. Thin directional connectors carry the sequence; the ElevenLabs node receives a pale verdant tonal treatment and green border as the single selected system point.

### Quality Rows

Quality checks are flat list rows separated by hairlines. A micro-rounded empty marker begins each row, while the tertiary note aligns at the far edge on wide screens and moves below the label on small screens.

## Do's and Don'ts

### Do:

- **Do** let one decisive residential image and large typography carry the opening composition.
- **Do** reserve Verdant Action for meaningful actions, focus, flow, links, and selected emphasis.
- **Do** use hairlines and tonal surfaces to organize editorial information; reserve shadows for the property cards and focused details dialog.
- **Do** preserve keyboard focus, readable line lengths, horizontal diagram scrolling, and reduced-motion behavior.
- **Do** keep listing data, filter feedback, and dialog dismissal explicit and keyboard accessible.
- **Do** keep radii restrained and tied to component function.

### Don't:

- **Don't** let the listing edit displace the hero proposition or the conversational next step.
- **Don't** introduce ornamental luxury cues, gradients as decoration, glass effects, or elevated card stacks.
- **Don't** flood large surfaces with the accent color or use green as ambient decoration.
- **Don't** replace the Manrope hierarchy with a decorative display face.
- **Don't** hide primary mobile navigation behind an unlabeled glyph when the current destinations fit in a visible row.
