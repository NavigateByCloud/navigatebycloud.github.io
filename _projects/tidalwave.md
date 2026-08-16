---
layout: page
title: Agentic AI Mortgage POS
description: Full-stack product engineering on an agentic AI mortgage point-of-sale platform
importance: 1
category: work
---

Since July 2025 I've been a software engineer at [Tidalwave](https://www.tidalwave.ai/), working full-stack in **React, TypeScript, and Go** on SOLO — an agentic AI **mortgage point-of-sale (POS)** platform.

A mortgage POS is the front door of a loan — the software a borrower actually sits in front of, and the system a loan officer works out of. It's where an application gets started, where documents and income and asset data arrive, and where the loan either moves forward or quietly stalls. "Agentic" here means the platform runs autonomous AI agents against the parts of that process that have historically required a person to chase, retype, or verify something by hand.

Mortgage is an unusually good domain for the kind of engineering I like. The problems are real ones — a borrower application is a long, high-stakes form that touches income, assets, property, and compliance, and every step of it has historically meant someone retyping information that already exists somewhere else. There is no clever abstraction that makes that go away. You have to understand the domain well enough to model it honestly, and then build interfaces that hold up when the data is incomplete, contradictory, or arriving from a system you don't control.

### What I work on

**Borrower-facing application workflows.** The parts of the product a borrower actually touches, spanning the borrower, loan officer, and closing experience. Long multi-step flows, conditional logic, validation that has to be strict without being hostile, and state that has to survive someone abandoning the process on Tuesday and returning on Friday.

**Loan origination system integration.** Tidalwave's platform integrates with [ICE Encompass](https://www.tidalwave.ai/blog/agentic-ai-mortgage-startup-tidalwave-announces-ice-mortgage-technology-integration) through the Encompass Partner Connect API. Integration work of this kind is mostly domain translation: mortgage and compliance rules have to become data models and synchronization behavior, and the two systems have to agree about the state of a loan even when they disagree about how to represent it.

**AI-assisted workflows with a human in the loop.** The interesting engineering question in applied AI right now isn't whether a model can extract structure from unstructured input — it usually can. It's what happens at the boundary: how you show a person what the system inferred, how you make correcting it cheaper than doing it manually, and how you make the failure modes visible instead of silent. Getting that boundary right is most of the work.

### What I've taken from it

Coming from real-time graphics and developer tooling, the biggest shift has been how much of product engineering is judgment about the domain rather than technique. The hard part is rarely the code. It's knowing which of two reasonable-looking models will still be reasonable in six months, and being willing to sit with a mortgage banker until you actually understand why the process is shaped the way it is.
