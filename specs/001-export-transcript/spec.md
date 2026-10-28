# Feature Specification: Export transcript

**Feature Branch**: none (standalone local project)
**Created**: 2026-10-28
**Status**: Ready for planning
**Input**: Criar script para baixar transcricao do YouTube no navegador.

## User Scenarios & Testing
### User Story 1 - Download displayed transcript (Priority: P1)
With a video's transcript open, the user runs a script and receives a text file.
**Why this priority**: This is the entire requested workflow.
**Independent Test**: A fixture containing two transcript segments produces one download
with both lines in order, preserved accents and timestamps when displayed.
**Acceptance Scenarios**:
1. Given a loaded transcript, when run, download one UTF-8 .txt containing its segment text.
2. Given no transcript or no text, when run, show Portuguese instructions and create no file.
3. Given a non-YouTube page, when run, refuse without reading transcript content.

### Edge Cases
- Empty segments are omitted; repeated spoken lines are preserved.
- Missing timestamps do not prevent export.
- Invalid filename characters are replaced; missing title uses transcricao.
- A changed page structure reports missing transcript rather than reporting success.

## Requirements
### Functional Requirements
- FR-001: Run from the desktop browser console on the current YouTube video.
- FR-002: Export the loaded, open transcript to one UTF-8 .txt in displayed order.
- FR-003: Include title and video URL followed by transcript lines and displayed timestamps.
- FR-004: Show actionable Portuguese errors for unsupported page or absent/empty transcript.
- FR-005: Make no external requests and access no credentials.
- FR-006: Use a valid filename and release temporary download resources.
### Key Entities
- Video: current URL and displayed title.
- Transcript segment: text and optional displayed timestamp.

## Success Criteria
### Measurable Outcomes
- SC-001: A two-segment fixture downloads exactly once with both lines and accents intact.
- SC-002: All unsupported-page and empty-transcript checks download zero files.
- SC-003: Execution generates zero network requests.
- SC-004: A user can follow the documented open-panel and console workflow in five steps.

## Assumptions
- User opens Mostrar transcricao before execution; the export contains loaded segments.
- Desktop Chrome/Edge are the target; no extension, backend or audio transcription is requested.
- Live YouTube verification requires a real video and browser session; fixture checks alone
  do not establish current selector compatibility.
