---
order: 5
cover: dissertation
tag: Academic
title: HCI dissertation
summary: One idea, three very different people. A final year study in how much an interface has to change when the person using it does.
cardMeta: Final year project, 2023 to 2024
linkLabel: Read more
heading: A study in human-computer interaction
intro: "Can the same idea work for an eight-year-old, a 65-year-old and someone who can't see the screen? For my final year project I picked one everyday task, cooking, and designed and built three interfaces around it, one for each of those people. It's where I learned that good design isn't one right answer. It's the right answer for someone."
meta:
  - { label: Degree, value: "BSc Computer Science with Year in Industry, Royal Holloway" }
  - { label: Role, value: "Solo: research, design, engineering and testing" }
  - { label: Timeline, value: "September 2023 to April 2024" }
  - { label: Tools, value: "Figma, React, React Router, Bootstrap, React Testing Library, Lighthouse" }
stats:
  - { value: "3", label: Interfaces, each built for a different person }
  - { value: "10", label: Nielsen heuristics as the design rulebook }
  - { value: "100/100", label: "Lighthouse accessibility score, Chef Mingle" }
takeaway: The same principles give you different answers for different people. That's the job, not a contradiction.
---

## Where it started

It started at Accenture, during my year in industry. My manager had dyslexia. During Social Mobility Week I wrote alt text for presentations, and realised how much of what we shipped quietly assumed everyone read, saw and clicked the same way.

So when I came back for my final year, I wanted to test that assumption properly. Not in theory. In working software.

## One task, three people

Cooking was the constant. Everyone does it, and everyone does it differently. I wrote three personas and gave each one their own interface.

| Persona | Interface | What they needed |
| --- | --- | --- |
| Emma, 8 | Kids Cook Academy, a website | Colour, clear steps, and a sense of progress |
| David, 65 | Chef Mingle, a desktop recipe-sharing app | Readable type, obvious navigation, a community |
| Kyle, 30, visually impaired | Cooking Companion, a mobile kitchen assistant | Alt text, screen reader support, high contrast and large type |

The rulebook stayed the same: Nielsen's ten usability heuristics, Krug's *Don't Make Me Think*, and Dix's *Human-Computer Interaction*. What changed was how each rule showed up on screen.

## Same rule, different answers

Take *visibility of system status*. For Emma, it became progress bars on her home page, so she could see how far she'd got. For David, it meant a like button that fills in when you tap it, so he never has to remember what he's already liked. For Kyle, it meant describing every recipe image in alt text, because a picture of beef stew tells a screen reader nothing.

<figure class="case-figure">
<img src="/images/hci/kids-progress.jpg" alt="Kids Cook Academy progress page: stuffed peppers, mac and cheese and chocolate chip cookies, each with a coloured progress bar and a completion percentage." loading="lazy" width="1600" height="763">
<figcaption>Kids Cook Academy opens on progress, not a menu. Emma sees how far she's got before anything else.</figcaption>
</figure>

Or take *aesthetic and minimalist design*. For a child, minimal still meant bright: a triadic colour palette with gender-neutral visuals. For David, it meant pulling colour out of the background entirely so the text could do the work. For Kyle, it meant cutting a whole row of icons from the top bar and trusting a single bottom navigation.

I sketched all three in Figma, then built them in React with React Router for navigation. Some ideas made it from sketch to screen. Some didn't, and some got better on the way.

<figure class="case-figure">
<div class="case-figure-row">
<div><p class="label">Sketch</p><img src="/images/hci/kids-sketch.jpg" alt="Figma sketch of a Kids Cook Academy recipe page: stuffed peppers with a photo, time, difficulty and servings, and one step at a time with previous and next buttons." loading="lazy" width="1560" height="1104"></div>
<div><p class="label">Built</p><img src="/images/hci/kids-built.jpg" alt="Built Kids Cook Academy stuffed peppers page with a go back button, a large photo, and ingredients and instructions in two columns." loading="lazy" width="1600" height="769"></div>
</div>
<figcaption>Kids Cook Academy. The sketch showed one step at a time. The build fell back to a full list, and testing showed the text was too small for kids.</figcaption>
</figure>

<figure class="case-figure case-figure--phones">
<div class="case-figure-row">
<div><p class="label">Sketch</p><img src="/images/hci/companion-sketch.jpg" alt="Figma sketch of the Cooking Companion recipe screen: a top icon bar, a beef stew photo with its description, a nutrition grid and a bottom navigation bar." loading="lazy" width="414" height="916"></div>
<div><p class="label">Built</p><img src="/images/hci/companion-built.jpg" alt="Built Cooking Companion home screen: a beef stew card with described photo, icons for time, difficulty and servings, a View Recipe button, and a four-icon bottom navigation bar." loading="lazy" width="570" height="1220"></div>
</div>
<figcaption>Cooking Companion. The top row of icons didn't survive. One bottom navigation bar, labelled, was enough.</figcaption>
</figure>

## What testing changed

I ran think-aloud sessions with people in each target age group, with mixed confidence in both cooking and technology. A small group, mostly friends and family. Honest about that. It still changed the designs more than any textbook did.

- **The search bar confused people.** In Chef Mingle, participants didn't know what they were meant to search for. I swapped it for a simple "Recipes" drop-down. Less clever, much clearer.
- **"Explore" was too vague.** The landing page became "Home", because that's what people expected it to be called.
- **My favourite colours failed.** Not with people, with the tools. The palette I'd sketched for Kids Cook Academy didn't pass Lighthouse's contrast audit. Blue and black did. Fun lost to readable, and the kids' version was better for it.
- **The audio icon was too small.** On the app built for someone with low vision. That one stung, and it's exactly why you test.
- **Kids' recipe text was too small too.** The fix was already sitting in Cooking Companion: break the method into steps you move through one at a time.

<figure class="case-figure">
<div class="case-figure-row">
<div><p class="label">Sketch</p><img src="/images/hci/mingle-sketch.jpg" alt="Figma sketch of Chef Mingle's home page with a Search Recipes box, and Explore, Upload Recipe and Edit Profile in the navigation." loading="lazy" width="822" height="586"></div>
<div><p class="label">After testing</p><img src="/images/hci/mingle-built.jpg" alt="Built Chef Mingle home page. The search box is replaced by an open Recipes drop-down listing chocolate chip cookies, beef stew and mac and cheese, and Explore is now Home." loading="lazy" width="1600" height="764"></div>
</div>
<figcaption>Chef Mingle. The search box became a Recipes drop-down, and Explore became Home.</figcaption>
</figure>

<figure class="case-figure case-figure--phones">
<div class="case-figure-row">
<div><p class="label">Ingredients</p><img src="/images/hci/companion-ingredients.jpg" alt="Cooking Companion recipe screen with a video thumbnail and the Ingredients tab open, listing celery, onion, carrots and bay leaves." loading="lazy" width="562" height="1220"></div>
<div><p class="label">Steps</p><img src="/images/hci/companion-steps.jpg" alt="The same screen on the Steps tab, showing step one with back and next buttons." loading="lazy" width="558" height="1210"></div>
</div>
<figcaption>Cooking Companion splits a recipe into two tabs and moves through the method one step at a time.</figcaption>
</figure>

## The part nobody sees

I also wrote about privacy, using the Cambridge Analytica scandal as the case study. A personality quiz harvested data from up to 87 million people. Nobody using it thought they'd agreed to that.

That shaped the plans for all three apps: collect only what the app needs, ask for consent in plain language, and require a parent or guardian's consent before storing anything about a child. Privacy by design, not a banner at the end.

## What I'd do differently

Plenty. Not every button did something by submission day. I fought Bootstrap's styles with `!important` more than I'd like to admit. Merging three app branches at the end taught me more about Git than I wanted to learn in one week.

But the bigger lesson was about scope. Three interfaces meant I could compare them side by side, which was the whole point. It also meant none got the polish one could have had. I'd still make that trade. The comparison was the research.

## Why it still matters

I now design healthcare services used by people with low digital confidence, visual impairments and high anxiety. The question hasn't changed since this project: who is this actually for, and what does the same rule look like for them?

This was the first time I asked it properly. It's still the first question I ask.

[Watch the video demo](https://youtu.be/AMhrpHQG4p0)
