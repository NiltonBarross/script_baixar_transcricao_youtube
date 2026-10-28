# Tasks: Export transcript
Input: spec.md, plan.md, research.md, data-model.md, contracts/console.md.

## Phase 1: Setup
- [x] T001 Initialize Spec Kit and constitution in .specify/memory/constitution.md.
## Phase 2: Foundational
- [x] T002 Verify local-only console contract in specs/001-export-transcript/contracts/console.md.
## Phase 3: User Story 1 (P1)
Goal: download loaded transcript or report an actionable error.
Independent test: two-segment fixture, Unicode, repeated text, missing timestamps and rejection paths.
- [x] T003 [US1] Create fixture self-check in test-transcricao.cjs and confirm failure before script exists.
- [x] T004 [US1] Implement local extraction, validation and download in baixar-transcricao.js.
- [x] T005 [US1] Run test-transcricao.cjs and verify syntax of baixar-transcricao.js.
## Final Phase: Polish
- [x] T006 Document five-step console usage and live-validation limitation in README.md.

## Dependencies & Execution Order
T001 -> T002 -> T003 -> T004 -> T005 -> T006.
No parallel implementation is needed; US1 is the whole MVP. Independent review may run separately.
All tasks have IDs and paths; three tasks belong to US1.

## Implementation Strategy
Deliver the single console script; no backend, extension or additional features.

## Verification
node test-transcricao.cjs: PASS. node --check baixar-transcricao.js: PASS.
Independent approach review completed. Self-review: no external requests, no credential access,
preserves duplicate lines, rejects empty content, scopes extraction to a visible panel.
Live YouTube selectors/completeness remain unverified; limitation documented in README.md.
