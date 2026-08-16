---
layout: page
title: Looking Glass Unity Plugin
description: Owning the developer experience of a holographic display SDK
img: assets/img/unity-plugin-thumbnail.jpg
importance: 3
category: work
giscus_comments: false
---

The [Looking Glass Unity Plugin](https://lookingglassfactory.com/software/looking-glass-unity-plugin) is how developers build for Looking Glass displays. I developed and maintained it over several years, and owned its developer-experience layer — the sample scenes, the setup wizard, the pairing and calibration flows, and the documentation.

That layer is the whole product, from a developer's point of view. Someone evaluating a holographic display has an hour of patience, a device they've never used, and no mental model for what multi-view rendering does to their scene. Whether that hour ends in a working build or a closed tab is decided almost entirely by onboarding — and onboarding is unglamorous work that tends to go unowned unless someone insists on owning it.

Concretely that meant: nine sample scenes covering the real use cases rather than the easy ones, a setup wizard that handles the messy first-run states, pairing and calibration flows that make hardware variance invisible to the developer, and [reference documentation](https://docs.lookingglassfactory.com/software/index/script-reference/ios-sample-scene-scripts) written to be read by someone who is stuck.

The payoff is compounding and mostly invisible: every experience built on the plugin is one that didn't need a bespoke rendering implementation, and every developer who got to a working build in an afternoon is one who stayed.

### Key Features

- **Interactive Scene Execution**: Seamlessly run interactive scenes directly within the Unity editor or in packaged builds.
- **iOS Compatibility**: Develop and deploy apps tailored for iOS devices, expanding your reach.
- **Hologram Recording**: Capture stunning holograms directly from the Unity editor for playback or sharing.
- **Hardware Integration**: Utilize hardware buttons on Looking Glass devices for enhanced control (Windows only).
- **Advanced Visuals**: Leverage a post-processing stack specifically optimized for holographic content.
- **Intuitive Controls**: Implement a 3D cursor and orbit controls for natural, immersive holographic interactions.

### The iOS sample scene

One of my later contributions was the iOS sample scene and its step-by-step setup guide, along with the [script reference documentation](https://docs.lookingglassfactory.com/software/index/script-reference/ios-sample-scene-scripts) that goes with it. Below are screenshots from the iOS integration process.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/unity-plugin-ios-page2.jpg" title="avatar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The GameObject and Component for a page in Editor
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/unity-plugin-ios-popup.jpg" title="avatar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The GameObject and Component for a pop-up in Editor
</div>

Plugin and related codes can be downloaded at the [Unity Plugin Website](https://lookingglassfactory.com/software/looking-glass-unity-plugin).
