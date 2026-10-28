<!-- Sync impact: scaffold -> 1.0.0; five principles adopted; no deferred items. -->
# YouTube Transcricao Constitution

## Core Principles
### I. Minimal browser script
Use native browser APIs and no dependencies or backend.
### II. Local data
Read only the current YouTube transcript; never send text or credentials elsewhere.
### III. Explicit failure
Reject unsupported pages and missing or empty transcripts without downloading empty files.
### IV. Verification
Verify extraction, Unicode, filename safety and failure paths with a small automated check.
### V. Honest limits
Document the required open transcript panel and dependency on YouTube page structure.

## Constraints
Desktop browser console, UTF-8 text download, no audio transcription or external requests.

## Development Workflow
Complete specification, plan and tasks before editing implementation. Implement listed tasks only.

## Governance
Amendments must record rationale and increment semantic version: major for incompatible rules,
minor for additions, patch for clarifications. Review implementations against all five principles.

**Version**: 1.0.0 | **Ratified**: 2026-10-28 | **Last Amended**: 2026-10-28
