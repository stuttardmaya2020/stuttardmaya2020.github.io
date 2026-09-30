import { Hero } from "../sections/Hero";
import { CaseStudies } from "../sections/CaseStudies";
import { Paintings } from "../sections/Paintings";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Paintings />
      <Contact />
    </>
  );
}
