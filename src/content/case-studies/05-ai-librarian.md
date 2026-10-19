---
order: 4
visual: summary
cardMeta: Client work · Oct 2025
cardTitle: An AI librarian for clinical staff
cardLine: A clinician asks a question, the AI goes and fetches from four records, and every answer says where it came from.
eyebrow: Case study · Client work at Accenture · October 2025
title: An AI librarian for clinical staff
summary: Before an appointment, staff have to piece a patient's story together from the GP record, hospital notes, the shared care record and maternity notes. Design leadership asked me to prototype an AI assistant that does the fetching, so they could present it in response to a ministerial request. I had about a month.
overview:
  - { label: My role, value: "Interaction Designer. I designed the experience and built the prototype." }
  - { label: Team, value: "Me and a content designer, briefed by the head of user-centred design." }
  - { label: Timeline, value: About a month in October 2025. Presented by design leadership. }
  - { label: Tools, value: "HTML, CSS and the client's prototype kit, built in VS Code with GitHub Copilot, deployed to Heroku." }
visualCaption: Illustrative recreation with made-up data. The prototype used fake patient data too.
decisions:
  - title: Story first, questions second
    body: Staff log in, choose the patient and land on why they're here (an 18-week maternity check-up) and their journey so far, already summarised. If they need more, they ask in plain language.
    chips: [GP record, Hospital record, Shared care record, Maternity notes]
  - title: Every answer says where it came from
    body: The summary names the record behind each part of the answer, like "from the GP record" or "from the shared care record". A clinician can check it instead of taking the AI's word for it.
  - title: Ask before writing back
    body: After the check-up, the assistant drafts the notes and a next step, such as ordering an iron test. Then it asks "Would you like to update all systems?" and nothing changes until they say yes.
stats:
  - { value: "4", label: patient records in one summary }
  - { value: "~1", label: month from brief to presented prototype }
impactTitle: Outcome
impact: Design leadership presented the prototype as part of their response to a ministerial request. I don't know what happened after that, so I won't claim anything. What I do know is that they could have asked any designer to build it, and they asked me.
takeaway: In a clinical setting, an AI summary is only as useful as a clinician's ability to check where it came from.
---

A midwife walking into an 18-week check-up needs the patient's story so far. That story is spread across several systems. And since the last check-up a lot can happen: a GP visit, a viral infection, a course of antibiotics picked up from the pharmacy three days ago.

The brief was to show what an AI "librarian" could do: fetch everything, say what matters for this appointment, and flag anything that affects the pregnancy.

> The question: what would a clinician need to see before trusting an AI summary of the patient in front of them?
