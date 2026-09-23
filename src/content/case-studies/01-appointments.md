---
order: 1
featured: true
cover: appointments
tag: Featured
title: Appointment and referral management
summary: A national standard for how patients understand and manage their healthcare appointments, built to hold up across hundreds of regional providers and legacy systems.
cardMeta: Senior Interaction Designer, 2025 to present
heading: Patient readiness, appointment and referral management
intro: "Patients were attending appointments despite existing digital notifications, not because of them. Most prepared out of anxiety caused by unclear information. This project was about fixing the basics: one national standard that works for every patient, across every regional provider, regardless of what software sits underneath."
tableLabel: Research rounds
meta:
  - { label: Role, value: Senior Interaction Designer }
  - { label: Timeline, value: 2025 to present }
  - { label: Scope, value: "National standard, hundreds of regional providers" }
  - { label: Worked with, value: "Product manager, user researcher, engineering, clinical safety and governance leads" }
  - { label: Status, value: "Shipped, live rollout" }
stats:
  - { value: "100+", label: Research participants across five rounds }
  - { value: "4+", label: Features through clinical safety sign-off }
  - { value: "500+", label: Regional trusts reached by the design standard }
takeaway: A system that's honest about its own limitations builds more trust than one that fakes consistency it can't deliver.
note: Screens omitted, client confidentiality
---

## Context: why this project exists

A patient gets a notification that reads "virtual appointment booked." They don't know if that means video or telephone. They don't know whether to travel. So they prepare for both, just in case, and show up stressed either way. This mattered because it wasn't a one-off complaint: it was happening at national scale, across a patient population that includes people with low digital confidence and high anxiety about healthcare in general.

## Research, five rounds, 100+ participants

| Round | Method | Participants | Focus |
| --- | --- | --- | --- |
| 1 | Survey | 13 | Baseline readiness barriers, community accessibility groups |
| 2 | Co-design | 12 | What reassurance do patients need, and in what form? |
| 3 | Moderated usability | 8 | Two prototype variants across three consultation mediums |
| 4 | Unmoderated (A/B) | 34 | Confirm attendance, video joining, clinician name placement |
| 5 | Validation | 34 | Final design validation |

Every round included participants with low digital confidence, visual impairments, and mental health conditions. The same finding surfaced every time: patients didn't trust the notifications, so they compensated with stressful personal workarounds.

## Key design moments

### Should "Confirm Attendance" work the same way everywhere?

The obvious answer was yes, one consistent pattern, simple to build and simple to maintain. But some regional providers couldn't expose real-time booking data to a central system, so a single confirmation pattern would have implied a live connection that didn't exist for everyone. I designed three variants of the same interaction instead, each tuned to what the underlying provider system could actually support, while keeping the patient-facing language identical. It was more work to design and harder to explain in governance, but a single fake-simple pattern would have quietly broken trust the first time a confirmation didn't behave as promised.

### How literal should "no travel required" be?

Early drafts treated a telephone appointment like a lighter version of an in-person one. Research showed patients still packed bags, arranged childcare, and asked for time off work for phone calls, because nothing on screen actively told them not to. The fix was almost embarrassingly small: an explicit line stating no travel was needed. It tested better than any more elaborate design we tried, which was a good reminder that the highest-impact decision isn't always the most interesting one to present.

> "Research showed users were over-preparing out of uncertainty rather than relying on digital prompts. We needed to make appointment types completely unambiguous."

## What shipped

The consultation medium standard, the three confirm-attendance variants, and a three-state video joining flow (opens in-app, opens in browser, or unavailable, each with fallback guidance) all went live. Full screens are withheld here under client confidentiality, but the interaction specs and governance documentation exist and I can walk through them directly.

## Governance and clinical safety

I led the UCD deliverables through formal Design Assurance and clinical safety sign-off: scoping hazard workshops, coordinating cross-functional input, and presenting to governance boards from submission through to sign-off, which enabled rollout across connected providers.

## Impact

The standard is now live and being adopted across regional trusts, reducing the ambiguity that was driving unnecessary patient anxiety and duplicated preparation. Because it's a shared standard rather than a one-off feature, every provider that adopts it inherits the research behind it, not just the screens.

## Reflection

Designing at national scale means designing for constraints you'll never fully see. I went in expecting the interesting problems to be visual. They weren't. The decisions that actually moved the needle were about precise, unglamorous wording and about being honest in the interface about what the system could and couldn't promise in real time.
