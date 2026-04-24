import Image from "next/image";
import "./Services.css";

export default function Services() {
  return (
    <section className="services" aria-label="Services">
      <article className="servicesTitle">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:
        </p>
      </article>

    <div className="row">
      <div className="card">
        <div className="cardContent">
          <h3 className="heading">
            Search engine
            <br />
            optimization
          </h3>

          <a href="#" className="link">
            <Image src="/Icon.png" alt="icon" width={41} height={41} />
            Learn more
          </a>
        </div>

        <div className="cardImage">
          <Image
            src="/cardImage1.png"
            alt="Illustration"
            width={210}
            height={167}
          />
        </div>
      </div>

      <div className="card">
        <div className="cardContent">
          <h3 className="heading">
            Pay-per-click
            <br />
            advertising
          </h3>

          <a href="#" className="link">
            <Image src="/Icon.png" alt="icon" width={41} height={41} />
            Learn more
          </a>
        </div>

        <div className="cardImage">
          <Image
            src="/cardImage2.png"
            alt="Illustration"
            width={210}
            height={148}
          />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="card">
        <div className="cardContent">
          <h3 className="heading">
            Social Media
            <br />
            Marketing
          </h3>

          <a href="#" className="link">
            <Image src="/Icon2.png" alt="icon" width={41} height={41} />
            Learn more
          </a>
        </div>

        <div className="cardImage">
          <Image
            src="/cardImage3.png"
            alt="Illustration"
            width={209}
            height={210}
          />
        </div>
      </div>

      <div className="card">
        <div className="cardContent">
          <h3 className="heading">
            Email
            <br />
            Marketing
          </h3>

          <a href="#" className="link">
            <Image src="/Icon.png" alt="icon" width={41} height={41} />
            Learn more
          </a>
        </div>

        <div className="cardImage">
          <Image
            src="/cardImage4.png"
            alt="Illustration"
            width={210}
            height={193}
          />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="card">
        <div className="cardContent">
          <h3 className="heading">
            Content
            <br />
            Creation
          </h3>

          <a href="#" className="link">
            <Image src="/Icon.png" alt="icon" width={41} height={41} />
            Learn more
          </a>
        </div>

        <div className="cardImage">
          <Image
            src="/cardImage5.png"
            alt="Illustration"
            width={210}
            height={196}
          />
        </div>
      </div>

      <div className="card">
        <div className="cardContent">
          <h3 className="heading">
            Analytics and
            <br />
            Tracking
          </h3>

          <a href="#" className="link">
            <Image src="/Icon2.png" alt="icon" width={41} height={41} />
            Learn more
          </a>
        </div>

        <div className="cardImage">
          <Image
            src="/cardImage6.png"
            alt="Illustration"
            width={210}
            height={170}
          />
        </div>
      </div>
    </div>
</section>
  );
}
