# Tasks: Open transcript automatically
## Phase 1: Setup
- [x] T001 Record requirements in specs/002-open-transcript/spec.md.
## Phase 2: Foundation
- [x] T002 Resolve constitutional and simplicity checks in specs/002-open-transcript/plan.md.
## Phase 3: US1 (P1)
Independent test: closed/delayed transcript opens once; existing export stays correct.
- [x] T003 [US1] Update test-transcricao.cjs for async behavior, opening, timeout and navigation; verify regression fails.
- [x] T004 [US1] Add bounded opening/polling and navigation guard in baixar-transcricao.js.
- [x] T005 [US1] Run test-transcricao.cjs and syntax check baixar-transcricao.js.
## Final Phase: Polish
- [x] T006 Update README.md and specs/001-export-transcript/quickstart.md for automatic opening.
## Dependencies and strategy
T001 -> T002 -> T003 -> T004 -> T005 -> T006. Single-story MVP.
No parallel implementation needed; tests and source changes are dependent.

## Verification
New closed-panel test failed before implementation and passes afterward.
node test-transcricao.cjs: PASS, including opening once, delayed text, timeout, navigation,
existing open-panel export, Unicode, filename and unsupported-page checks.
node --check baixar-transcricao.js: PASS.
Self-review: UI queries scoped to video metadata; no direct network API added.
Live YouTube selector compatibility remains unverified.
