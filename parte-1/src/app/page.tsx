import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import { Logotypes } from "./components/Logotypes/Logotypes";
import CtaBlock from "./components/CTA/CTA";
import CaseStudies from "./components/CaseStudies/CaseStudies";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Logotypes/>
      <Services/>
      <CtaBlock/>
      <CaseStudies/>
    </div>
  );
}
