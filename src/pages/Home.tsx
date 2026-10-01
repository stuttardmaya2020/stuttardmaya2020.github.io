import { Hero } from "../sections/Hero";
import { Toolkit } from "../sections/Toolkit";
import { CaseStudies } from "../sections/CaseStudies";
import { Process } from "../sections/Process";
import { About } from "../sections/About";
import { Paintings } from "../sections/Paintings";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Toolkit />
      <CaseStudies />
      <Process />
      <About />
      <Paintings />
      <Contact />
    </>
  );
}
