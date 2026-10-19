---
order: 4
visual: summary
cardMeta: Client work · Oct 2025
cardTitle: An AI librarian for clinical staff
cardLine: Clinicians ask out loud or in text, the AI fetches from four records, and every answer links back to its source.
eyebrow: Case study · Client work at Accenture · October 2025
title: An AI librarian for clinical staff
summary: Before an appointment, staff have to piece a patient's story together from the GP record, hospital notes, the shared care record and maternity notes. Design leadership asked me to prototype an AI assistant that does the fetching, so they could present it in response to a high-profile request from the very top. I had about a month.
overview:
  - { label: My role, value: "Interaction Designer. I designed the experience and built the prototype." }
  - { label: Team, value: "Me and a content designer, briefed by the head of user-centred design." }
  - { label: Timeline, value: About a month in October 2025. Presented by design leadership. }
  - { label: Tools, value: "HTML, CSS and the client's prototype kit, built in VS Code with GitHub Copilot, deployed to Heroku." }
visualCaption: Illustrative recreation with made-up data. The prototype used fake patient data too.
decisions:
  - title: Story first, questions second
    body: Staff sign in and find the patient by their patient number or straight from their calendar. They land on why the patient is here (an 18-week maternity check-up) and their journey so far, already summarised. If they need more, they ask in plain language or upload a file.
    chips: [GP record, Hospital record, Shared care record, Maternity notes]
  - title: Every answer says where it came from
    body: Every piece of information has its source next to it. Where the record can be opened, the source is a link straight to it. Where it can't, the source is named in brackets. A clinician can check it instead of taking the AI's word for it.
  - title: Talk instead of type
    body: During the appointment, the clinician can dictate what they found. The prototype faked the recording and played back a sample question, to show that in real life the assistant could answer questions and turn speech into notes.
  - title: Ask before writing back
    body: From what the clinician said, the assistant drafts a summary and a next step, such as ordering an iron test. They review it, confirm the action, and only then does it ask "Would you like to update all systems?"
stats:
  - { value: "4", label: patient records in one summary }
  - { value: "~1", label: month from brief to presented prototype }
impactTitle: Outcome
impact: Design leadership presented the prototype to the most senior audience the work could reach. I don't know what happened after that, so I won't claim anything. What I do know is that they could have asked any designer to build it, and they asked me.
takeaway: In a clinical setting, an AI summary is only as useful as a clinician's ability to check where it came from.
---

A midwife walking into an 18-week check-up needs the patient's story so far. That story is spread across several systems. And since the last check-up a lot can happen: a GP visit, a viral infection, a course of antibiotics picked up from the pharmacy three days ago.

The brief was to show what an AI "librarian" could do: fetch everything, say what matters for this appointment, and flag anything that affects the pregnancy.

> The question: what would a clinician need to see before trusting an AI summary of the patient in front of them?
