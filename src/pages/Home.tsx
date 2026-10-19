import { Hero } from "../sections/Hero";
import { Toolkit } from "../sections/Toolkit";
import { CaseStudies } from "../sections/CaseStudies";
import { Independent } from "../sections/Independent";
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
      <Independent />
      <Process />
      <About />
      <Paintings />
      <Contact />
    </>
  );
}
