# Implementation Plan: Open transcript automatically
**Date**: 2026-10-28 | **Spec**: spec.md | **Branch**: none
## Summary
Convert existing IIFE to async. Poll visible transcript; expand video description once,
activate scoped transcript button once, and wait up to 60 intervals of 250ms.
Abort if current URL changes. Preserve existing download code.
## Technical Context
JavaScript, native DOM and timers; no dependencies. Desktop Chrome/Edge console.
Node vm/assert fixtures test delayed rendering and failure paths without real waits.
## Constitution Check
PASS before/after design: native browser only, no direct network calls or credentials,
bounded failure, automated checks, documented DOM limits. Native UI clicks may cause
YouTube itself to request transcript data, consistent with local-only processing.
## Project Structure
Change baixar-transcricao.js, test-transcricao.cjs, README.md and existing quickstart.
No other callers, exports, dependencies or configuration. Existing tests call the IIFE;
they must now await its returned promise. New fixtures model asynchronous UI updates.
## Complexity Tracking
No exceptions. One polling loop and existing extraction, no framework or endpoint integration.
