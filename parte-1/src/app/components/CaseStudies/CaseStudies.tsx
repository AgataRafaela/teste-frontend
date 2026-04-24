import "./CaseStudies.css";

export default function CaseStudies() {
  return (
    <section className="caseStudies">
      <div className="caseStudiesHeader">
        <h2>Case Studies</h2>

        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing
          Success through Our Case Studies
        </p>
      </div>

      <div className="caseStudiesContent">
        <div className="caseCard">
          <p>
            For a local restaurant, we implemented a targeted PPC
            campaign that resulted in a 50% increase in website
            traffic and a 25% increase in sales.
          </p>

          <a href="#">
            Learn more <img src="/Icon-seta.png" alt="Icone de uma seta verde" />
          </a>
        </div>

        <div className="divider"></div>

        <div className="caseCard">
          <p>
            For a B2B software company, we developed an SEO strategy
            that resulted in first page ranking for key keywords and
            a 200% increase in organic traffic.
          </p>

          <a href="#">
            Learn more <img src="/Icon-seta.png" alt="Icone de uma seta verde" />
          </a>
        </div>

        <div className="divider"></div>

        <div className="caseCard">
          <p>
            For a national retail chain, we created a social media
            marketing campaign that increased followers by 25% and
            generated a 20% increase in online sales.
          </p>

          <a href="#">
            Learn more <img src="/Icon-seta.png" alt="Icone de uma seta verde" />
          </a>
        </div>
      </div>
    </section>
  );
}