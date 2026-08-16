---
layout: page
title: Holographic Display R&D
description: Display calibration research, and a co-invented patent on multi-viewer holographic imaging
importance: 5
category: work
---

Two strands of research-flavored work from my years at Looking Glass Factory. They're on one page because they come from the same place — sitting between the software and the hardware, where the abstractions leak and the answers come from measurement rather than from reasoning.

### Display calibration

Every holographic display leaves the line with small physical variances. Optics are not placed perfectly, panels are not aligned perfectly, and the software has to know the precise character of each individual unit or the 3D effect degrades — views bleed into each other and the image loses its solidity.

I worked with the CTO and the founding hardware engineer on a real-time calibration system built in **Python and OpenCV**: capture the display's actual optical behavior, solve for the parameters that describe it, and write them back to the unit. The system was adopted across both new and legacy display lines, which was the harder constraint — supporting hardware that already existed in the world, with different optical stacks and different failure modes, rather than designing for one clean target.

Working on calibration is a good corrective to the instinct that software problems are solved by thinking harder. You can be completely confident in a model and be wrong, because the physical device does not care. The loop is: measure, be surprised, revise.

### U.S. Patent 11,754,975

I'm a co-inventor on [U.S. Patent 11,754,975 B2](https://patents.google.com/patent/US11754975B2/en), _System and Method for Holographic Image Display_, assigned to Looking Glass Factory and granted in September 2023.

The patent covers a holographic display system that tracks where viewers are positioned and renders customized views accordingly — so multiple people looking at the same display at the same time can each be served an appropriate perspective, without glasses or a headset. The full claims are public at the link above.

Being named on it is one of the more concrete artifacts of six years of this kind of work, though I'd say the honest version is that patents are a lagging indicator. The interesting part was the several years of trying things against real hardware that preceded it.

---

The applied side of the same platform is documented on the [Unity plugin](/projects/unity-plugin/) and [ArcGIS integration](/projects/arcgis-integration/) pages.
