import { ArrowUpRight, Building2, MapPin, ShieldCheck } from 'lucide-react';

function App() {
  return (
    <main className="site-shell">
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />

      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#company" aria-label="Indikus Solutions home">
          <span className="brand-symbol">IS</span>
          <span>Indikus Solutions</span>
        </a>
        <div className="nav-meta">
          <span className="status-dot" />
          <span>United Kingdom</span>
        </div>
      </nav>

      <section className="hero" id="company">
        <div className="hero-copy">
          <h1>Building what’s <em>next.</em></h1>
          <p className="intro">
            Indikus Solutions Ltd is a UK-based company creating considered ventures with a clear point of view.
          </p>
          <div className="project-block">
            <p className="project-note"><span>Court99</span> is the product we build and is basically the digital preparation layer for court hearings, designed to bridge the missing gap in preparation of law firm clients.</p>
          </div>
          <a className="scroll-link" href="#details">
            Explore company details
            <span className="scroll-arrow"><ArrowUpRight size={16} strokeWidth={1.8} /></span>
          </a>
        </div>

        <div className="spirals" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
      </section>

      <section className="details" id="details">
        <div className="details-heading">
          <span className="section-number">01</span>
          <h2>Company details</h2>
        </div>
        <div className="details-grid">
          <div className="detail-card">
            <Building2 size={19} strokeWidth={1.5} />
            <div><span>Registered name</span><strong>INDIKUS SOLUTIONS LTD</strong></div>
          </div>
          <div className="detail-card">
            <ShieldCheck size={19} strokeWidth={1.5} />
            <div><span>Company number</span><strong>NI724714</strong></div>
          </div>
          <div className="detail-card">
            <span className="calendar-icon">17</span>
            <div><span>Incorporated</span><strong>17 December 2024</strong></div>
          </div>
          <div className="detail-card address-card">
            <MapPin size={19} strokeWidth={1.5} />
            <div><span>Registered office</span><strong>Office 121, 92 Castle Street<br />Belfast, Northern Ireland, BT1 1HE</strong></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Indikus Solutions Ltd</span>
        <a href="#company">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}

export default App;
