---
layout: page
title: Liteforms
description: Taking a conversational AI hologram from experiment to shipped product
img: assets/img/liteforms customization.png
importance: 2
category: work
related_publications: false
---

[Liteforms](https://lookingglassfactory.com/blog/liteforms-introduction) began as an experiment: what happens if you put a large language model behind a holographic character and let someone talk to it out loud? It was a compelling demo. Demos are not products, and the year-long distance between those two things is the work I'm proudest of at Looking Glass Factory.

I was the main engineer on that productization — taking it from a prototype into a shipped application on Mac and Windows, built in **Unity/C#** against **OpenAI's APIs** and **Azure Speech**. It launched publicly in 2023 and was covered by [TechCrunch](https://techcrunch.com/2023/05/23/looking-glass-taps-chatgpt-for-holograms-you-can-talk-to) and [PetaPixel](https://petapixel.com/2023/05/23/looking-glass-liteforms-are-holograms-you-can-talk-with/), and I supported customer-facing demos for enterprise clients including Accenture.

### What productization actually meant

**Authoring, not just conversing.** The demo had a character. The product needed anyone to be able to make one — personality, voice, appearance, animations, spatial placement. That meant designing and implementing essentially the entire application surface, which is what the screenshots below are.

**Latency you can live with.** A conversation has a rhythm, and speech-to-text, model inference, and text-to-speech chained end to end will break it if you treat them as sequential blocking calls. Making a hologram feel present rather than laggy is a pipelining and streaming problem long before it is a model-quality problem.

**Failure without breaking the illusion.** Network calls fail and models produce something unusable. A character that freezes or emits an error string stops being a character. Handling that gracefully — staying in character while recovering — is a design problem that lands squarely on the engineer.

**The thing running on the display.** Rendering a live, animated, lip-synced avatar on a light field display means paying the multi-view rendering cost continuously, at conversational frame rates, on a customer's machine.

Below are screenshots of the application UI.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/liteforms customization.png" title="avatar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Customize the essence of your AI character by entering key details on this intuitive profile setup page.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/liteforms character running.png" title="avatar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Engage in dynamic conversations with your AI character, guiding the dialogue with full control over the interaction.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/liteforms rpm.png" title="avatar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Tailor every visual detail of your AI avatar on this comprehensive appearance customization page.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/liteforms avatar custom.png" title="avatar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Personalize your avatar further by adjusting its name, animations, and spatial settings on this dedicated customization page.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/liteforms setting.png" title="avatar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Access a streamlined Settings page to fine-tune your Liteforms experience with ease.
</div>
