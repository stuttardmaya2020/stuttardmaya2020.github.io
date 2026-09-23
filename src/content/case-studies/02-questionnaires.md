---
order: 2
cover: questionnaires
tag: Sensitive UX
title: Questionnaires and documents
summary: Adapting clinical questionnaires for mental health secondary care, designed for high cognitive load and emotional vulnerability.
heading: Questionnaires and documents, mental health settings
intro: Standard portal designs weren't built for mental health settings, where patients may be in distress, cognitive load is elevated, and rigid design patterns can trigger unnecessary anxiety. This project adapted those experiences for specialised healthcare providers nationwide.
meta:
  - { label: Role, value: Senior Interaction Designer }
  - { label: Timeline, value: 2025 to 2026 }
  - { label: Worked with, value: "Product manager, user researcher, clinical safety leads" }
  - { label: Status, value: "Shipped, live across regional healthcare providers" }
stats:
  - { value: "69+", label: "Research participants, three methods" }
  - { value: "8/9", label: Participants needed non-linear step navigation }
takeaway: Best practice isn't universal. The right pattern depends on who's using it and what state they're in when they do.
note: Screens omitted, client confidentiality
---

## Context: why this project exists

Patterns that work fine for routine care, mandatory question completion, "to do" badges, bright urgency tags, were actively causing anxiety in mental health service users. Linear questionnaire steps forced patients to answer in strict order, which broke existing non-digital habits and led to people abandoning the task altogether.

## Research, 69+ participants across three methods

Unmoderated sessions testing content formats, one-to-one usability testing with mental health service users (including participants with neurodivergence and sensory impairments), and quantitative validation rounds.

> User research revealed that 8 out of 9 participants needed to navigate back and forth between questions to revisit answers as their emotional state evolved. Linear form validation was preventing this.

## Key design moments

### Letting people answer out of order, safely

Removing strict linear validation was the controversial call: it's a pattern that exists for good technical and data-quality reasons, and dropping it meant convincing engineering and clinical stakeholders it wouldn't compromise the data. I proposed flexible navigation that let patients move freely between questions without losing progress, backed directly by the research finding above. It shipped, and it's the single change I'd point to first if asked what mattered most on this project.

### Softening the task language

Action-heavy imperative copy ("Complete this now") reads as neutral in most products. In this context it read as pressure. I rewrote task language into more supportive, less commanding phrasing, and added optional content warnings before sensitive topics so patients could brace themselves rather than being surprised mid-task.

## What shipped

Flexible non-linear navigation, contextual "what to expect" guidance screens, softened task language, hidden-by-default completed tasks, and explicit save-and-pause options across every step. Screens withheld under client confidentiality.

## Governance

Designs passed formal clinical safety review and UCD governance before expanding into active deployment across regional mental health providers.

## Impact

Now live across regional mental health providers. The clearest signal of success wasn't a metric, it was that clinical stakeholders who were originally cautious about relaxing the linear flow became advocates for it once they saw the research.

## Reflection

I learned to be more careful about which "best practice" patterns I default to. Linear form validation is best practice in most contexts. Here it was actively harmful, and the only way to know that was to sit in the research sessions myself rather than work from a summary.
