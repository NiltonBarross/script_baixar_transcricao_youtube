# Feature Specification: Open transcript automatically
**Created**: 2026-10-28
**Status**: Ready for planning
**Input**: Nao consegue fazer ele abrir a transcricao sozinho?

## User Scenarios & Testing
### User Story 1 - Open and download (Priority: P1)
User runs the console script on a video without opening its transcript manually.
**Why this priority**: Remove the manual step the user identified.
**Independent Test**: A closed-panel fixture opens via its transcript button and downloads once.
**Acceptance Scenarios**:
1. Given a collapsed description, running expands it, activates Show transcript, waits and downloads.
2. Given an open transcript, running downloads without toggling the panel.
3. Given unavailable transcript or loading timeout, running alerts and downloads nothing.
4. Given navigation during loading, running aborts without exporting stale text.
### Edge Cases
Portuguese and English labels, delayed buttons and text, hidden panels, absent captions.

## Requirements
### Functional Requirements
- FR-001: Expand current video description and activate its transcript control automatically.
- FR-002: Wait at most 15 seconds for transcript text before an actionable Portuguese error.
- FR-003: Preserve existing text, timestamp, filename and UTF-8 download behavior.
- FR-004: Never click unrelated controls; click transcript control at most once.
- FR-005: Abort if the video URL changes while waiting.
- FR-006: No direct network calls or credential access. Native YouTube controls may load data.
### Key Entities
Video URL; transcript opening state; loaded segment text.

## Success Criteria
### Measurable Outcomes
- SC-001: Closed-panel fixture activates the transcript exactly once and downloads once.
- SC-002: Open-panel fixture requires zero opening clicks.
- SC-003: Missing transcript and navigation fixtures download zero files.
- SC-004: Existing extraction and filename fixtures still pass.

## Assumptions
Desktop YouTube watch page; native controls are present; automatic speech transcription excluded.
No unresolved requirements. Current live selectors remain a separately reported validation limit.
