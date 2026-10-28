# Implementation Plan: Export transcript
**Branch**: none | **Date**: 2026-10-28 | **Spec**: spec.md

## Summary
Standalone console script reads the open transcript panel and downloads UTF-8 text.

## Technical Context
**Language/Version**: modern JavaScript
**Primary Dependencies**: native DOM, Blob, URL APIs only
**Storage**: downloaded file only
**Testing**: Node built-in assert and vm with DOM fixtures
**Target Platform**: desktop Chrome/Edge
**Project Type**: one-off browser script
**Performance Goals**: one synchronous linear pass over loaded segments
**Constraints**: no network requests, account access or third-party code
**Scale/Scope**: current video, currently loaded transcript language

## Constitution Check
Before research: PASS; native APIs, local processing, actionable errors, small automated check,
documented page-structure limits. After design: PASS on the same five principles.
Simplicity: one script, one test file, no framework or generalized scraping API.

## Project Structure
Feature documentation in specs/001-export-transcript/.
Implementation: baixar-transcricao.js; verification: test-transcricao.cjs; usage: README.md.
There are no existing callers, exports, fixtures or configuration to migrate.

## Complexity Tracking
No violations or exceptions.
