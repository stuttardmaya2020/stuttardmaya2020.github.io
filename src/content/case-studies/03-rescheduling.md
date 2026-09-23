---
order: 3
cover: rescheduling
tag: Constraints
title: Rescheduling uplift
summary: Three adaptable rescheduling journeys that accommodate varied technical backends without confusing the patient.
heading: Rescheduling, designing around system constraints
intro: Not every regional provider can stream real-time calendar availability to a central application. Patients trying to reschedule kept hitting dead ends, driving up contact centre volumes and missed appointments. The goal was an experience that adapts across wildly different provider tech capabilities without ever feeling broken to the patient.
meta:
  - { label: Role, value: Senior Interaction Designer }
  - { label: Timeline, value: 2025 to 2026 }
  - { label: Worked with, value: "Product manager, user researcher, engineering" }
  - { label: Status, value: "Shipped, governance complete" }
stats:
  - { value: "25", label: Participants across four research rounds }
  - { value: "3", label: Configurable journey patterns for provider support }
takeaway: Don't let the interface promise more certainty than the system behind it can actually deliver.
note: Screens omitted, client confidentiality
---

## Context: why this project exists

A dead end in a booking flow doesn't just fail quietly. It pushes the patient to call a contact centre, which is slower for them and more expensive for the provider. Fixing this meant designing for the worst-supported provider in the network, not the best-supported one.

## Key design moments

### Killing the interactive calendar

An interactive calendar grid was the obvious, expected pattern, and it was also the wrong one. Testing showed it implied immediate live booking. When the backend actually required manual processing behind the scenes, that implied promise broke on delivery and trust dropped sharply. I replaced it with a clear preference-selection step instead of a calendar, a harder sell internally because it looked, on paper, like a step backward in polish.

> Testing showed interactive calendar views implied immediate live booking to users. When visual cues suggested immediate confirmation but the backend required manual processing, trust dropped.

## What shipped

Three configurable journeys: live slot selection where the backend supports it, preference selection (day and time windows) where it doesn't, and request-based routing for complex care plans needing prior clinical triage. Confirmation screens were reordered to lead with status and realistic response timeframes rather than a false sense of instant confirmation.

## Impact

All three journey variations passed programme governance and are reducing dead ends for non-integrated providers, while keeping patient expectations accurate regardless of which backend they land on.

## Reflection

This project taught me that consistency and honesty aren't the same thing. Making three journeys look and feel coherent was harder than making one polished flow, but a single dishonest flow would have been worse for every patient it touched.
