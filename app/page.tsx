import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top VPN Services 2026 | Ranked by Speed, Privacy and Value",
  description:
    "A conversion-focused homepage concept for comparing the best global VPN services in 2026.",
  openGraph: {
    title: "Top VPN Services 2026",
    description:
      "Compare the best VPNs for privacy, streaming, speed and price.",
    images: ["/vpn-dashboard-hero.png"],
  },
};

const providers = [
  {
    rank: "01",
    name: "NordVPN",
    tag: "Best overall",
    score: "9.8",
    price: "$3.09/mo",
    speed: "Very fast",
    devices: "10",
    strengths: ["Streaming", "Privacy suite", "Server coverage"],
    note: "Strong choice for users who want one VPN for travel, streaming and daily security.",
  },
  {
    rank: "02",
    name: "Surfshark",
    tag: "Best value",
    score: "9.4",
    price: "$2.19/mo",
    speed: "Fast",
    devices: "Unlimited",
    strengths: ["Low price", "Families", "Simple setup"],
    note: "A practical pick when price and multi-device coverage matter most.",
  },
  {
    rank: "03",
    name: "ExpressVPN",
    tag: "Easiest to use",
    score: "9.1",
    price: "$4.99/mo",
    speed: "Fast",
    devices: "8",
    strengths: ["Beginner UX", "Router app", "Support"],
    note: "Best suited for users who want a polished, low-friction experience.",
  },
  {
    rank: "04",
    name: "Proton VPN",
    tag: "Best for privacy",
    score: "8.9",
    price: "$4.49/mo",
    speed: "Very fast",
    devices: "10",
    strengths: ["Swiss privacy", "Open source", "Free tier"],
    note: "A privacy-first option with strong transparency and advanced controls.",
  },
  {
    rank: "05",
    name: "Private Internet Access",
    tag: "Best for customization",
    score: "8.5",
    price: "$2.03/mo",
    speed: "Good",
    devices: "Unlimited",
    strengths: ["Settings depth", "Ad blocker", "Open source"],
    note: "Works well for technical users who prefer more configuration control.",
  },
];

const research = [
  {
    source: "TechRadar",
    lesson:
      "Uses a quick winner summary before long analysis, so visitors can act without reading the full article.",
  },
  {
    source: "Tom's Guide",
    lesson:
      "Shows measurable comparison details such as speed, server locations and money-back guarantee near the provider CTA.",
  },
  {
    source: "Security.org",
    lesson:
      "Frames evaluation around practical criteria, not only price, which makes the ranking feel more trustworthy.",
  },
];

const metrics = [
  ["Speed tests", "35%"],
  ["Privacy controls", "25%"],
  ["Streaming access", "20%"],
  ["Price and renewal", "10%"],
  ["Support quality", "10%"],
];

const faqs = [
  {
    question: "Which VPN is best for most people in 2026?",
    answer:
      "NordVPN is positioned as the best overall option because it balances speed, privacy tools, streaming access and global server coverage.",
  },
  {
    question: "What should a global user compare first?",
    answer:
      "Start with privacy policy, speed, app usability, server locations, renewal price and refund terms. The cheapest plan is not always the best fit.",
  },
  {
    question: "Why place CTA buttons in every provider row?",
    answer:
      "VPN comparison traffic is high-intent. Repeating CTAs beside decision data reduces scrolling friction while keeping the page easy to scan.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Top VPN Services 2026">
          <span className="brand-mark">V</span>
          <span>VPNRank</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#rankings">Rankings</a>
          <a href="#compare">Compare</a>
          <a href="#method">Method</a>
        </nav>
        <a className="header-cta" href="#rankings">
          See top picks
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Updated July 2026</p>
          <h1>Top VPN Services 2026</h1>
          <p className="hero-lede">
            Compare trusted VPN providers for privacy, streaming, public Wi-Fi
            and travel. Ranked with a clear scoring model so global users can
            choose faster.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#rankings">
              Compare VPNs
            </a>
            <a className="secondary-button" href="#method">
              View methodology
            </a>
          </div>
          <div className="trust-strip" aria-label="Trust signals">
            <span>Independent criteria</span>
            <span>No-logs focus</span>
            <span>Refund terms checked</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="VPN comparison dashboard">
          <img
            src="/vpn-dashboard-hero.png"
            alt="Global VPN comparison dashboard with secure server map and ranked cards"
          />
        </div>
      </section>

      <section className="quick-winner" aria-label="Top recommendation">
        <div>
          <p className="section-kicker">Best overall</p>
          <h2>NordVPN leads for speed, security and everyday use.</h2>
        </div>
        <p>
          The first decision point is placed above the full comparison table
          because users searching for "best VPN" often want a fast answer before
          reading deeper evidence.
        </p>
        <a className="primary-button compact" href="#compare">
          Check the score
        </a>
      </section>

      <section className="section" id="rankings">
        <div className="section-heading">
          <p className="section-kicker">Top picks</p>
          <h2>Ranked for real buying decisions</h2>
          <p>
            Each card keeps the CTA beside the most important evidence: score,
            price, speed and the user type it fits best.
          </p>
        </div>
        <div className="provider-grid">
          {providers.map((provider) => (
            <article className="provider-card" key={provider.name}>
              <div className="provider-topline">
                <span className="rank-badge">{provider.rank}</span>
                <span className="tag">{provider.tag}</span>
              </div>
              <h3>{provider.name}</h3>
              <p>{provider.note}</p>
              <dl className="score-row">
                <div>
                  <dt>Score</dt>
                  <dd>{provider.score}</dd>
                </div>
                <div>
                  <dt>From</dt>
                  <dd>{provider.price}</dd>
                </div>
              </dl>
              <ul className="pill-list">
                {provider.strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
              <a className="card-cta" href="#compare">
                Review details
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section compare-section" id="compare">
        <div className="section-heading">
          <p className="section-kicker">Comparison</p>
          <h2>Scan the trade-offs without opening five tabs</h2>
          <p>
            Desktop uses a table for density. On small screens, the same data
            remains readable through horizontal scrolling.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Best for</th>
                <th>Score</th>
                <th>Speed</th>
                <th>Devices</th>
                <th>Starting price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider) => (
                <tr key={provider.name}>
                  <td>
                    <strong>{provider.name}</strong>
                  </td>
                  <td>{provider.tag}</td>
                  <td>{provider.score}</td>
                  <td>{provider.speed}</td>
                  <td>{provider.devices}</td>
                  <td>{provider.price}</td>
                  <td>
                    <a className="table-cta" href="#method">
                      Why this rank
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="split-section" id="method">
        <div>
          <p className="section-kicker">Methodology</p>
          <h2>A trust-first scoring model</h2>
          <p>
            The design avoids vague "number one" claims by showing weighted
            criteria. That makes the page feel closer to an editorial product
            than a thin affiliate landing page.
          </p>
        </div>
        <div className="metric-list">
          {metrics.map(([label, value]) => (
            <div className="metric" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section research-section">
        <div className="section-heading">
          <p className="section-kicker">Research applied</p>
          <h2>What this layout borrows from strong comparison sites</h2>
        </div>
        <div className="research-grid">
          {research.map((item) => (
            <article className="research-card" key={item.source}>
              <h3>{item.source}</h3>
              <p>{item.lesson}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="section-kicker">Buyer questions</p>
          <h2>Answers before the final click</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>VPNRank concept for Top VPN Services 2026.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
