# Tasks: Chapter 1 - Introduction to Physical AI & Humanoid Robotics

**Input**: Design documents from `/specs/1-chapter1-intro/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are NOT explicitly requested in the specification. Build validation via Docusaurus serves as functional testing.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Documentation site (Docusaurus)**: `docs/`, `src/components/`
- Chapter content: `docs/01-intro/`
- Components: `src/components/extensibility/`, `src/components/quiz/`, `src/components/citations/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and Docusaurus configuration

- [x] T001 Initialize Docusaurus v3 project with TypeScript template at repository root
- [x] T002 Install dependencies: @docusaurus/plugin-ideal-image, configure MDX 3.x support in docusaurus.config.ts
- [x] T003 [P] Create directory structure: docs/01-intro/, docs/01-intro/assets/
- [x] T004 [P] Create directory structure: src/components/extensibility/, src/components/quiz/, src/components/citations/
- [x] T005 [P] Configure sidebar.ts for chapter navigation

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core components that MUST be complete before ANY user story content can be written

**⚠️ CRITICAL**: No user story work can begin until this phase is complete (components must exist for MDX imports)

### Extensibility Components (Required by All Stories)

- [x] T006 [P] Create PersonalizeButton stub component in src/components/extensibility/PersonalizeButton.tsx per contracts/components.md
- [x] T007 [P] Create TranslateButton stub component in src/components/extensibility/TranslateButton.tsx per contracts/components.md
- [x] T008 [P] Create RAGZone wrapper component in src/components/extensibility/RAGZone.tsx per contracts/components.md
- [x] T009 Create UserControls composite component in src/components/extensibility/UserControls.tsx (depends on T006, T007)

### Citation Components (Required by Content Stories)

- [x] T010 [P] Create Cite inline component in src/components/citations/Cite.tsx per contracts/components.md
- [x] T011 [P] Create References list component in src/components/citations/References.tsx per contracts/components.md

### Quiz Component (Required by US5)

- [x] T012 Create QuizRenderer component in src/components/quiz/QuizRenderer.tsx per contracts/components.md

### Component Index

- [x] T013 Create component index exports in src/components/index.ts for clean imports

**Checkpoint**: Foundation ready - all components exist, MDX imports will resolve

---

## Phase 3: User Story 1 - Understand Physical AI vs Digital AI (Priority: P1) 🎯 MVP

**Goal**: Reader can define Physical AI vs Digital AI with 2 concrete examples each

**Independent Test**: Complete 01-theory.mdx section, verify reader can distinguish Physical AI from Digital AI and name examples

### Content for User Story 1

- [x] T014 [P] [US1] Create diagram ch1-physical-ai-vs-digital-ai.svg in docs/01-intro/assets/ showing comparison between embodied and digital AI
- [x] T015 [P] [US1] Create diagram ch1-physical-ai-stack.svg in docs/01-intro/assets/ showing perception → planning → control → actuation pipeline
- [x] T016 [US1] Write 01-theory.mdx (~1,500 words) in docs/01-intro/ covering Physical AI definition, comparison with Digital AI, and Physical AI stack (wrap in RAGZone)
- [x] T017 [US1] Add ≥2 IEEE citations to docs/01-intro/references.json for Physical AI sources (Duan et al. 2022, Brooks 1991)
- [x] T018 [US1] Create index.mdx in docs/01-intro/ with UserControls import and 4 learning objectives

**Checkpoint**: User Story 1 complete - reader can understand Physical AI vs Digital AI distinction

---

## Phase 4: User Story 2 - Understand Why Humanoid Form Factor Matters (Priority: P1)

**Goal**: Reader can explain 3 key advantages of humanoid robots

**Independent Test**: Complete 02-why-humanoids.mdx section, verify reader can cite 3 advantages with justification

### Content for User Story 2

- [x] T019 [P] [US2] Create diagram ch1-humanoid-anatomy.svg in docs/01-intro/assets/ showing head/sensors, torso/compute, arms/manipulation, legs/locomotion
- [x] T020 [P] [US2] Create diagram ch1-humanoid-advantages.svg in docs/01-intro/assets/ visualizing 3 key advantages
- [x] T021 [US2] Write 02-why-humanoids.mdx (~1,200 words) in docs/01-intro/ covering humanoid form factor, 3 advantages, anatomy overview (wrap in RAGZone)
- [x] T022 [US2] Add ≥2 IEEE citations to docs/01-intro/references.json for humanoid sources (Harada et al. 2016, Kajita et al. 2014)

**Checkpoint**: User Story 2 complete - reader understands humanoid advantages

---

## Phase 5: User Story 3 - Navigate Course Roadmap (Priority: P2)

**Goal**: Reader can describe textbook progression and plan learning path

**Independent Test**: Complete 03-tech-stack.mdx and 04-roadmap.mdx, verify reader can identify relevant chapters for their interests

### Content for User Story 3

- [x] T023 [P] [US3] Create diagram ch1-tech-stack-overview.svg in docs/01-intro/assets/ showing simulation and hardware tools
- [x] T024 [P] [US3] Create diagram ch1-sim-to-real-gap.svg in docs/01-intro/assets/ showing domain transfer concept
- [x] T025 [P] [US3] Create diagram ch1-course-roadmap.svg in docs/01-intro/assets/ showing 12-chapter progression with dependencies
- [x] T026 [P] [US3] Create diagram ch1-example-robots.svg in docs/01-intro/assets/ showing Physical AI examples (Spot, surgical robots, etc.)
- [x] T027 [US3] Write 03-tech-stack.mdx (~1,000 words) in docs/01-intro/ covering simulation tools, hardware platforms, software stack (wrap in RAGZone)
- [x] T028 [US3] Write 04-roadmap.mdx (~800 words) in docs/01-intro/ covering chapter overview, learning paths, prerequisites
- [x] T029 [US3] Add ≥3 official doc citations to docs/01-intro/references.json (ROS2, NVIDIA Isaac, MuJoCo)
- [x] T030 [US3] Add ≥1 peer-reviewed citation to docs/01-intro/references.json for sim-to-real (Tobin et al. 2017)

**Checkpoint**: User Story 3 complete - reader can navigate textbook structure

---

## Phase 6: User Story 4 - Extensibility Hooks Render Correctly (Priority: P2)

**Goal**: MDX extensibility components parse and render without errors

**Independent Test**: Run `npm run build`, verify no MDX parsing errors and components render as placeholders

### Validation for User Story 4

- [x] T031 [US4] Verify UserControls renders at top of index.mdx in docs/01-intro/
- [x] T032 [US4] Verify RAGZone wrappers have data-rag-zone attributes in 01-theory.mdx, 02-why-humanoids.mdx, 03-tech-stack.mdx
- [x] T033 [US4] Run Docusaurus build (`npm run build`) and verify zero MDX parsing errors
- [x] T034 [US4] Verify all component imports resolve correctly in docs/01-intro/*.mdx files

**Checkpoint**: User Story 4 complete - extensibility hooks functional

---

## Phase 7: User Story 5 - Pass Chapter Quiz (Priority: P3)

**Goal**: Quiz validates learning objectives, 85% target pass rate

**Independent Test**: Complete quiz.json with 10 questions, verify answers derivable from chapter content

### Content for User Story 5

- [x] T035 [P] [US5] Create quiz.json in docs/01-intro/ with questions Q1-Q3 validating LO1 (Physical AI definition)
- [x] T036 [P] [US5] Add questions Q4-Q6 to docs/01-intro/quiz.json validating LO2 (humanoid advantages)
- [x] T037 [P] [US5] Add questions Q7-Q8 to docs/01-intro/quiz.json validating LO3 (tech stack)
- [x] T038 [P] [US5] Add questions Q9-Q10 to docs/01-intro/quiz.json validating LO4 (roadmap navigation)
- [x] T039 [US5] Create quiz section in docs/01-intro/index.mdx importing QuizRenderer with quiz.json data
- [x] T040 [US5] Verify each quiz question answer is derivable from corresponding chapter section

**Checkpoint**: User Story 5 complete - quiz validates all learning objectives

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and quality assurance

- [x] T041 Validate word count is 4,000-5,500 words across all docs/01-intro/*.mdx files
- [x] T042 Validate Flesch-Kincaid grade level is 9-11 using readability tool
- [x] T043 Verify citation count: ≥5 peer-reviewed + ≥3 official docs in docs/01-intro/references.json
- [x] T044 Verify all 8 diagrams have alt text in MDX imports
- [x] T045 Add References section to docs/01-intro/index.mdx importing References component with references.json data
- [x] T046 Run final Docusaurus build and verify site renders correctly
- [x] T047 Run quickstart.md validation checklist

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup
    ↓
Phase 2: Foundational (BLOCKS all user stories)
    ↓
Phase 3-7: User Stories (can run in parallel after Phase 2)
    ↓
Phase 8: Polish
```

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Phase 2 - Independent of US1
- **User Story 3 (P2)**: Can start after Phase 2 - Independent of US1/US2
- **User Story 4 (P2)**: Requires US1-US3 content files to exist for validation
- **User Story 5 (P3)**: Requires US1-US3 content to write accurate quiz questions

### Within Each User Story

- Diagrams (marked [P]) can be created in parallel
- Content files depend on diagrams being available
- Citations added incrementally with content

### Parallel Opportunities

**Phase 1 (Setup)**:
```
T003, T004, T005 can run in parallel
```

**Phase 2 (Foundational)**:
```
T006, T007, T008, T010, T011 can run in parallel
Then: T009 (depends on T006, T007)
Then: T012, T013
```

**User Stories 1-3 (Content)**:
```
After Phase 2, US1/US2/US3 can proceed in parallel:
- US1: T014, T015 in parallel → T016, T017, T018
- US2: T019, T020 in parallel → T021, T022
- US3: T023, T024, T025, T026 in parallel → T027, T028, T029, T030
```

**User Story 5 (Quiz)**:
```
T035, T036, T037, T038 can run in parallel
Then: T039, T040
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Physical AI definition)
4. Complete Phase 4: User Story 2 (Humanoid advantages)
5. **STOP and VALIDATE**: Build site, verify core content renders
6. Deploy to GitHub Pages for initial review

### Incremental Delivery

1. Setup + Foundational → Components ready
2. User Story 1 → Theory section live
3. User Story 2 → Humanoid section live
4. User Story 3 → Tech stack + roadmap live
5. User Story 4 → Extensibility validated
6. User Story 5 → Quiz functional
7. Polish → Full chapter validated

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (diagrams + theory content)
   - Developer B: User Story 2 (diagrams + humanoid content)
   - Developer C: User Story 3 (diagrams + tech/roadmap content)
3. Converge for US4 validation, US5 quiz creation, and Polish

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Total tasks: 47
- Parallel opportunities: 23 tasks marked [P]
- MVP scope: Phase 1-4 (Setup + Foundational + US1 + US2) = 22 tasks
