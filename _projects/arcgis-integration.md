---
layout: page
title: ArcGIS on Holographic Displays
description: The rendering layer bringing enterprise geospatial data into real 3D
importance: 4
category: work
---

Most 3D data is looked at on flat screens. That is especially true in geospatial work, where ArcGIS users routinely build terrain, elevation, photogrammetry, and underground utility data in three dimensions and then flatten it back down to a monitor to actually look at it.

At Looking Glass Factory I engineered the rendering layer for the [ArcGIS integration](https://lookingglassfactory.com/solutions-arcgis) — an application that takes that data and puts it on a holographic display, in real depth, with no headset and no eye tracking. Several people can stand around it and point at the same thing, which turns out to be the entire value proposition.

The application was built on **Esri's ArcGIS Maps SDK for Unity**, which handles the geospatial side: streaming basemaps, elevation, and 3D scene layers into a Unity scene and keeping them registered to real-world coordinates. My work was the layer underneath the picture — getting that scene to render correctly on a light field display.

### The engineering problem

A Looking Glass display doesn't render one image. It renders many views of the same scene simultaneously, so that different viewing angles resolve into different perspectives. Esri's SDK, entirely reasonably, is built around the assumption of a single camera looking at the world. Reconciling those two models is the substance of the work.

That assumption reaches further than it first appears. Level-of-detail selection, tile streaming, and culling all key off camera position — so a rendering setup with many simultaneous viewpoints has to be reconciled with an SDK making decisions as though there were one.

The geospatial data makes it harder still:

- **Scene scale is extreme.** City-scale terrain with sub-meter detail is a depth-precision problem before it is a performance problem.
- **Data streams in continuously.** Layers load progressively and at varying levels of detail, so the scene is constantly changing under the renderer rather than being loaded once and held.
- **Layers have to stay legible in depth.** Depth is only useful if it clarifies. Overlapping layers that read fine in 2D can turn into visual mush once they have real parallax, so much of the work is about making depth carry meaning instead of noise.
- **The framing has to be right.** How the data volume sits relative to the display's usable depth range decides whether the result looks solid or looks like a blurry diorama. Geospatial scenes have no natural scale, so this is a judgment call, made per dataset.

### Why it mattered

This was the clearest case I worked on of the company's enterprise thesis: that the value of a holographic display isn't the novelty, it's letting a group of people reason about spatial data together without each of them putting on a headset. Geospatial is a domain where that's obviously true — utility planning and urban development are collaborative by nature, and the flat screen has always been the compromise.

It also proved something narrower and useful: that an established enterprise 3D application could gain real depth without being rebuilt from scratch. The domain SDK keeps doing its job, and the holographic rendering happens beneath it.
