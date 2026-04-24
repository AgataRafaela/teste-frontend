import './CTA.css'

import Image from "next/image";

export default function CtaBlock() {
  return (
    <section className="ctaBlock">
      <div className="ctaContent">
        <div className="ctaText">
          <h2>Let’s make things happen</h2>

          <p>
            Contact us today to learn more about how our digital
            marketing services can help your business grow and
            succeed online.
          </p>

          <button className="ctaButton">
            Get your free proposal
          </button>
        </div>

        <div className="ctaImage">
          <Image
            src="/cta-Illustration.png"
            alt="CTA Illustration"
            width={359}
            height={395}
          />
        </div>
      </div>
    </section>
  );
}