import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="header" aria-label="Header">
      <div className="left">
        <h1 className="title">
          Navigating the digital landscape for success
        </h1>

        <p className="subtitle">
          Our digital marketing agency helps businesses grow and succeed
          online through a range of services including SEO, PPC, social
          media marketing, and content creation.
        </p>

        <button className="button">
          Book a consultation
        </button>
      </div>

      <div className="right">
        <Image
          src="/illustration.png"
          alt="Illustration"
          width={600}
          height={515}
        />
      </div>
    </header>
  );
}