# Research
- Decision: extract loaded transcript DOM, then Blob download.
- Rationale: no authentication handling, backend, CORS or undocumented network endpoints.
- Alternatives considered: caption endpoints and audio transcription add unnecessary moving parts.
- Official workflow: https://support.google.com/youtube/answer/15930243
  documents opening Show transcript from the description for captioned videos.
- DOM selectors are not a public YouTube contract. Live compatibility remains unverified;
  missing selectors must produce an actionable error. Export scope is loaded panel content.
