import { useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/manrope";
import { projectStory } from "./content";
import {
  bedroomFilters,
  districtFilters,
  properties,
} from "./properties";
import "./styles.css";

const configuredAgentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID?.trim();
const hasAgentId =
  Boolean(configuredAgentId) && configuredAgentId !== "your_public_agent_id";
const currencyFormatter = new Intl.NumberFormat("en-SG", {
  style: "currency",
  currency: "SGD",
  maximumFractionDigits: 0,
});
const numberFormatter = new Intl.NumberFormat("en-SG");

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="John Doe Estate Singapore">
        John Doe Estate Singapore : SEAN.C
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#properties">Properties</a>
        <a href="#assistant">Live Assistant</a>
        <a href="#project-story">Project Story</a>
      </nav>
      <a className="button button-dark header-cta" href="#assistant">
        Talk to us
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span>Find your next</span>
          <span>home in Singapore.</span>
        </h1>
        <p>
          A conversational way to discover homes that fit your lifestyle, needs,
          and goals.
        </p>
        <a className="button button-accent" href="#assistant">
          Speak with our property expert
        </a>
      </div>
      <figure className="hero-media">
        <img
          src="/images/singapore-residence-hero.webp"
          alt="Contemporary Singapore residence with dark stone, warm timber, and tropical landscaping after rain"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
      </figure>
    </section>
  );
}

function PropertyDetails({ property, onClose, returnFocusRef }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusRef.current?.focus();
    };
  }, [onClose, returnFocusRef]);

  return (
    <div
      className="property-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="property-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-modal-title"
      >
        <header className="property-modal-header">
          <div>
            <h2 id="property-modal-title">{property.name}</h2>
            <p>{property.address}</p>
          </div>
          <button
            className="property-modal-close"
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={`Close details for ${property.name}`}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        </header>
        <img
          className="property-modal-image"
          src={property.image}
          alt={property.imageAlt}
          width="1200"
          height="800"
        />
        <div className="property-modal-content">
          <div className="property-modal-summary">
            <div className="property-badges" aria-label="Property classification">
              <span>{property.district}</span>
              <span>{property.bedrooms}</span>
            </div>
            <strong>{currencyFormatter.format(property.price)}</strong>
            <span>{numberFormatter.format(property.psf)} psf</span>
          </div>
          <dl className="property-modal-facts">
            <div>
              <dt>Area</dt>
              <dd>{numberFormatter.format(property.area)} sqft</dd>
            </div>
            <div>
              <dt>Tenure</dt>
              <dd>{property.tenure}</dd>
            </div>
            <div>
              <dt>TOP</dt>
              <dd>{property.top}</dd>
            </div>
            <div>
              <dt>Property type</dt>
              <dd>{property.type}</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

function PropertyCard({ property, onOpen }) {
  return (
    <article
      className="property-card"
      onClick={(event) => onOpen(property, event.currentTarget)}
    >
      <div className="property-card-media">
        <img
          src={property.image}
          alt={property.imageAlt}
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="property-badges" aria-label="Property classification">
          <span>{property.district}</span>
          <span>{property.bedrooms}</span>
        </div>
      </div>
      <div className="property-card-body">
        <h3>{property.name}</h3>
        <p className="property-address">{property.address}</p>
        <div className="property-price">
          <strong>{currencyFormatter.format(property.price)}</strong>
          <span>{numberFormatter.format(property.psf)} psf</span>
        </div>
        <dl className="property-card-facts">
          <div>
            <dt>Area</dt>
            <dd>{numberFormatter.format(property.area)} sqft</dd>
          </div>
          <div>
            <dt>Tenure</dt>
            <dd>{property.tenure.replace(" Leasehold", "")}</dd>
          </div>
          <div>
            <dt>TOP</dt>
            <dd>{property.top}</dd>
          </div>
        </dl>
        <div className="property-card-footer">
          <span>{property.type}</span>
          <button type="button" aria-label={`View details for ${property.name}`}>
            View details
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <fieldset className="property-filter-group">
      <legend>{label}</legend>
      <div className="property-filter-options">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function PropertyListings() {
  const [district, setDistrict] = useState("All");
  const [bedrooms, setBedrooms] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const returnFocusRef = useRef(null);

  const visibleProperties = properties.filter(
    (property) =>
      (district === "All" || property.district === district) &&
      (bedrooms === "All" || property.bedrooms === bedrooms),
  );

  const closePropertyDetails = useCallback(() => {
    setSelectedProperty(null);
  }, []);

  const openPropertyDetails = (property, card) => {
    returnFocusRef.current = card.querySelector("button");
    setSelectedProperty(property);
  };

  const resetFilters = () => {
    setDistrict("All");
    setBedrooms("All");
  };

  return (
    <section
      className="property-listings"
      id="properties"
      aria-labelledby="properties-title"
    >
      <h2 className="visually-hidden" id="properties-title">
        Available Singapore properties
      </h2>
      <div className="property-filter-bar">
        <FilterGroup
          label="Filter"
          options={districtFilters}
          value={district}
          onChange={setDistrict}
        />
        <div className="property-bedroom-filter">
          <FilterGroup
            label="Bedrooms"
            options={bedroomFilters}
            value={bedrooms}
            onChange={setBedrooms}
          />
          <p className="property-result-count" role="status" aria-live="polite">
            {visibleProperties.length}{" "}
            {visibleProperties.length === 1 ? "result" : "results"}
          </p>
        </div>
      </div>

      {visibleProperties.length > 0 ? (
        <div className="property-grid">
          {visibleProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onOpen={openPropertyDetails}
            />
          ))}
        </div>
      ) : (
        <div className="property-empty">
          <h3>No properties match both filters.</h3>
          <p>Reset the filters to see all five available properties.</p>
          <button className="button button-dark" type="button" onClick={resetFilters}>
            Reset filters
          </button>
        </div>
      )}

      {selectedProperty ? (
        <PropertyDetails
          property={selectedProperty}
          onClose={closePropertyDetails}
          returnFocusRef={returnFocusRef}
        />
      ) : null}
    </section>
  );
}

function AgentConfigurationNotice() {
  return (
    <div className="configuration-notice" role="status">
      <strong>The property assistant needs an agent ID.</strong>
      <p>
        Copy <code>.env.example</code> to <code>.env</code>, add your public
        ElevenLabs agent ID, then restart the development server.
      </p>
      <ol className="configuration-steps">
        <li>Enable Voice + Text in the agent’s Widget settings.</li>
        <li>Make the agent public and disable widget authentication.</li>
        <li>Allowlist localhost and 127.0.0.1 for local testing.</li>
      </ol>
      <a
        href="https://elevenlabs.io/docs/eleven-agents/customization/widget"
        target="_blank"
        rel="noreferrer"
      >
        Open the official setup guide
        <ExternalLinkIcon />
      </a>
    </div>
  );
}

function AssistantSection() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const widget = widgetRef.current;

    if (!widget) {
      return undefined;
    }

    let observer;
    let cancelled = false;

    const syncShellHeight = () => {
      const isExpanded = Boolean(
        widget.shadowRoot?.querySelector('button[aria-label="Collapse"]'),
      );
      widget
        .closest(".widget-shell")
        ?.classList.toggle("widget-shell-expanded", isExpanded);
    };

    customElements.whenDefined("elevenlabs-convai").then(() => {
      if (cancelled || !widget.shadowRoot) {
        return;
      }

      observer = new MutationObserver(syncShellHeight);
      observer.observe(widget.shadowRoot, {
        attributes: true,
        childList: true,
        subtree: true,
      });
      syncShellHeight();
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      className="assistant-section"
      id="assistant"
      aria-labelledby="assistant-title"
    >
      <div className="assistant-copy">
        <h2 id="assistant-title">
          Meet <strong>John</strong> our AI-powered property expert.
        </h2>
        <p>
          Chat or talk with our John about properties, neighbourhoods, or the kind of life you want to build in Singapore.
        </p>
        <p className="privacy-note">
          Voice mode will ask for microphone access only when you start a call. John is an AI powered by ElevenLabs's ElevenAgents.
        </p>
      </div>
      <div className="widget-shell">
        {hasAgentId ? (
          <elevenlabs-convai
            ref={widgetRef}
            agent-id={configuredAgentId}
            main_label="Looking for Singapore Homes?"
            start-call-text="Speak to John"
            variant="compact"
            avatar-orb-color-1="#41e410"
            avatar-orb-color-2="#039d0c"
            text-contents='{"main_label":"Looking for Singapore Homes?","start_call":"Speak to John"}'
            default-expanded="false"
            always-expanded="false"
          />
        ) : (
          <AgentConfigurationNotice />
        )}
      </div>
    </section>
  );
}

function FlowFigure() {
  return (
    <ol
      className="flow-figure"
      aria-label="Conversation flow from visitor request through agent understanding and exploration to the visitor's next decision"
    >
      {projectStory.conversationFlow.steps.map((step, index) => (
        <li className="flow-step-wrap" key={step.title}>
          <div className="flow-step">
            <strong>{step.title}</strong>
            <span>{step.detail}</span>
          </div>
          {index < projectStory.conversationFlow.steps.length - 1 ? (
            <span className="flow-arrow" aria-hidden="true">
              <span />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function TechnicalMapFigure() {
  return (
    <div className="technical-map">
      <div className="technical-source">
        <strong>{projectStory.technicalMap.website.title}</strong>
        <span>{projectStory.technicalMap.website.detail}</span>
      </div>
      <span className="technical-connector" aria-hidden="true">
        <span />
      </span>
      <div className="technical-platform">
        <strong className="technical-platform-title">
          {projectStory.technicalMap.platform.title}
        </strong>
        <div className="technical-platform-nodes">
          {projectStory.technicalMap.platform.nodes.map((node) => (
            <div className="technical-node" key={node.title}>
              <strong>{node.title}</strong>
              <span>{node.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EvidenceFigure() {
  return (
    <figure className="agent-evidence">
      <a
        className="agent-evidence-image-link"
        href={projectStory.evidence.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`${projectStory.evidence.linkLabel} in a new tab`}
      >
        <img
          src={projectStory.evidence.src}
          alt={projectStory.evidence.alt}
          width="1891"
          height="958"
          loading="lazy"
          decoding="async"
        />
      </a>
      <figcaption>
        <span>{projectStory.evidence.caption}</span>
        <a
          className="text-link"
          href={projectStory.evidence.src}
          target="_blank"
          rel="noreferrer"
        >
          {projectStory.evidence.linkLabel}
          <ExternalLinkIcon />
        </a>
      </figcaption>
    </figure>
  );
}

function StorySection() {
  return (
    <section
      className="story-section"
      id="project-story"
      aria-labelledby="story-title"
    >
      <div className="story-intro">
        <h2 id="story-title">Inside the demo</h2>
        <p>{projectStory.introduction}</p>
      </div>

      <article className="story-block motivation-block">
        <p className="sequence">01</p>
        <h3>{projectStory.motivation.title}</h3>
        <div className="motivation-copy">
          <p className="story-lead">{projectStory.motivation.lead}</p>
          <ul className="motivation-list">
            {projectStory.motivation.items.map((item) => (
              <li key={item.label}>
                <span className="motivation-bullet" aria-hidden="true" />
                <p className="motivation-metric" aria-hidden="true">
                  <strong>{item.metric}</strong>
                  <span>{item.label}</span>
                </p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="story-block success-block">
        <p className="sequence">02</p>
        <h3>{projectStory.successCriteria.title}</h3>
        <ol className="success-list">
          {projectStory.successCriteria.items.map((item, index) => (
            <li key={item.label}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{item.label}</strong>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </article>

      <article className="story-block flow-block">
        <p className="sequence">03</p>
        <h3>{projectStory.conversationFlow.title}</h3>
        <FlowFigure />
      </article>

      <EvidenceFigure />

      <article className="story-block technical-block">
        <p className="sequence">04</p>
        <h3>{projectStory.technicalMap.title}</h3>
        <p>{projectStory.technicalMap.description}</p>
        <TechnicalMapFigure />
      </article>

      <article className="story-block lessons-block">
        <p className="sequence">05</p>
        <h3>{projectStory.lessons.title}</h3>
        <div className="lessons-grid">
          {[projectStory.lessons.workedWell, projectStory.lessons.couldImprove].map(
            (group) => (
              <section key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ),
          )}
        </div>
      </article>
    </section>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="external-link-icon"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5.25 3.5h7.25v7.25M12.25 3.75l-8.5 8.5" />
    </svg>
  );
}

function Footer() {
  return (
    <footer>
      <span>John Doe Estate Singapore : SEAN.C</span>
      <p>
        Demonstration experience powered by SEAN.C & ElevenLabs.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropertyListings />
        <AssistantSection />
        <StorySection />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
