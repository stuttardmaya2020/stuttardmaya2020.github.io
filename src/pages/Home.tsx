import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { CaseStudies } from "../sections/CaseStudies";
import { WhyMe } from "../sections/WhyMe";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudies />
      <WhyMe />
      <Contact />
    </>
  );
}
