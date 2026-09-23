import { Reveal, RevealItem } from "./Reveal";
import { about } from "../lib/content";

export function Timeline() {
  return (
    <Reveal>
      <RevealItem>
        <h3 className="label">{about.experienceTitle}</h3>
      </RevealItem>
      <ol className="timeline">
        {about.experience.map((job) => (
          <RevealItem as="li" key={job.title}>
            <p className="timeline-years">{job.years}</p>
            <div>
              <p className="timeline-title">{job.title}</p>
              <p className="timeline-detail">{job.detail}</p>
            </div>
          </RevealItem>
        ))}
      </ol>
    </Reveal>
  );
}
