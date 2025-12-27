# Implementation Plan: Physical AI & Humanoid Robotics Textbook

**Branch**: `1-physical-ai-textbook` | **Date**: 2025-12-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/1-physical-ai-textbook/spec.md`

---

## Summary

This plan defines the execution roadmap for creating a comprehensive Physical AI & Humanoid Robotics textbook. The textbook will contain 8 modules with 48 chapters total, targeting Grade 9-11 readers. Implementation follows a phased approach: infrastructure setup, template creation, content generation by module, unified editing, and deployment.

---

## Technical Context

**Language/Version**: TypeScript 5.x (components), MDX (content), Python 3.11 (notebooks)
**Primary Dependencies**: Docusaurus v3, React 18, KaTeX, @docusaurus/theme-mermaid
**Storage**: Static files (GitHub repository + GitHub Pages)
**Testing**: Docusaurus build validation, content linting, Colab notebook execution
**Target Platform**: Web (static site), Google Colab (simulation), Jetson (hardware)
**Project Type**: Documentation site (Docusaurus)
**Performance Goals**: Build time <5 min, page load <2s, PDF export support
**Constraints**: 50k-80k words, IEEE citations (≥60% peer-reviewed), Grade 9-11 reading level
**Scale/Scope**: 8 modules, 48 chapters, ~65,000 words target

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Evidence |
|-----------|--------|----------|
| I. Educational Excellence Through Structured Pedagogy | PASS | Each chapter follows: Objectives → Theory → Simulation → Hardware → Case Study → Quiz |
| II. Accuracy Via Primary Sources | PASS | Citation requirements: ≥60% peer-reviewed (ICRA, IROS, RSS), ≥20% official docs |
| III. Modularity for Extensibility | PASS | RAG zones, PersonalizeButton, TranslateButton placeholders in all chapters |
| IV. Accessibility for Diverse Learners | PASS | Grade 9-11 reading level, simulation alternatives for hardware labs |
| V. Content Quality Standards | PASS | 48 chapters, 50k-80k words, runnable code, IEEE citations |
| VI. Test-First Development | PASS | Learning objectives before content, quiz questions defined first |

**Gate Result**: PASS - All constitution principles satisfied.

---

## Project Structure

### Documentation (this feature)

```text
specs/1-physical-ai-textbook/
├── spec.md              # Feature specification (completed)
├── plan.md              # This file
├── research.md          # Phase 0 output (completed)
├── data-model.md        # Phase 1 output (completed)
├── quickstart.md        # Phase 1 output (completed)
├── contracts/           # Phase 1 output (completed)
│   ├── chapter-frontmatter.schema.json
│   └── module-category.schema.json
├── checklists/
│   └── requirements.md  # Validation checklist (completed)
└── tasks.md             # Phase 2 output (NOT created by /sp.plan)
```

### Source Code (repository root)

```text
docs/
├── intro.md                           # Book introduction
├── _templates/
│   └── chapter-template.mdx           # Reusable chapter template
├── module-1-foundations/
│   ├── _category_.json
│   ├── 1-1-what-is-physical-ai.mdx
│   ├── 1-2-history-of-robotics-ai.mdx
│   ├── 1-3-physical-ai-technology-stack.mdx
│   ├── 1-4-mathematics-for-robotics.mdx
│   ├── 1-5-programming-fundamentals.mdx
│   └── 1-6-ethics-and-safety.mdx
├── module-2-anatomy/
│   ├── _category_.json
│   └── [5 chapters]
├── module-3-perception/
│   ├── _category_.json
│   └── [6 chapters]
├── module-4-motion/
│   ├── _category_.json
│   └── [7 chapters]
├── module-5-manipulation/
│   ├── _category_.json
│   └── [6 chapters]
├── module-6-learning/
│   ├── _category_.json
│   └── [8 chapters]
├── module-7-integration/
│   ├── _category_.json
│   └── [5 chapters]
└── module-8-applications/
    ├── _category_.json
    └── [5 chapters]

src/
├── components/
│   ├── PersonalizeButton.tsx          # Personalization placeholder
│   ├── TranslateButton.tsx            # Translation placeholder (Urdu)
│   ├── RagZone.tsx                    # RAG integration placeholder
│   └── index.ts                       # Component exports
├── css/
│   └── custom.css                     # Custom styles
└── theme/
    └── MDXComponents.tsx              # Global MDX component registration

static/
├── img/
│   └── [diagrams organized by module]
└── notebooks/
    └── [Colab notebooks organized by chapter]

docusaurus.config.js                   # Site configuration
sidebars.js                            # Navigation structure
package.json                           # Dependencies
```

**Structure Decision**: Docusaurus documentation site with 8 module directories, each containing chapter MDX files. Components in `src/components/` registered globally via MDXComponents.tsx.

---

## Execution Phases

### Phase 1: Repository Architecture & Bootstrapping

**Objective**: Establish project infrastructure with Docusaurus and module scaffolding.

**Tasks**:

| ID | Task | Dependencies | Validation |
|----|------|--------------|------------|
| P1-T1 | Initialize Docusaurus project with TypeScript | None | `npm run build` succeeds |
| P1-T2 | Configure docusaurus.config.js (title, URL, theme) | P1-T1 | Config loads without errors |
| P1-T3 | Create 8 module directories with _category_.json | P1-T1 | Sidebar shows 8 collapsible modules |
| P1-T4 | Create src/components directory structure | P1-T1 | Directory exists |
| P1-T5 | Create static/img and static/notebooks directories | P1-T1 | Directories exist |
| P1-T6 | Configure KaTeX for math rendering | P1-T2 | Math equations render correctly |
| P1-T7 | Configure Mermaid for diagrams | P1-T2 | Diagrams render correctly |
| P1-T8 | Create intro.md book introduction | P1-T3 | Homepage displays introduction |
| P1-T9 | Configure sidebars.js for module navigation | P1-T3 | Navigation works correctly |
| P1-T10 | Initial commit and push to GitHub | P1-T1 to P1-T9 | Branch pushed successfully |

**Outputs**:
- Working Docusaurus development environment
- 8 empty module directories with metadata
- PR labeled `bootstrap`

**Validation Gate**: `npm run build` produces error-free static site

---

### Phase 2: Chapter Template & MDX Blueprint

**Objective**: Create reusable chapter template with all required sections and extensibility hooks.

**Tasks**:

| ID | Task | Dependencies | Validation |
|----|------|--------------|------------|
| P2-T1 | Create PersonalizeButton.tsx placeholder component | P1-T4 | Component renders without errors |
| P2-T2 | Create TranslateButton.tsx placeholder component | P1-T4 | Component renders with "urdu" prop |
| P2-T3 | Create RagZone.tsx wrapper component | P1-T4 | Component wraps children with data attribute |
| P2-T4 | Create MDXComponents.tsx for global registration | P2-T1 to P2-T3 | Components available in MDX |
| P2-T5 | Create docs/_templates/chapter-template.mdx | P2-T4 | Template validates against schema |
| P2-T6 | Define custom.css styles for components | P2-T1 to P2-T3 | Components styled appropriately |
| P2-T7 | Test template rendering in Docusaurus | P2-T5 | All sections render correctly |
| P2-T8 | Document template usage in quickstart.md | P2-T5 | Documentation accurate |

**Outputs**:
- `docs/_templates/chapter-template.mdx`
- `src/components/PersonalizeButton.tsx`
- `src/components/TranslateButton.tsx`
- `src/components/RagZone.tsx`
- `src/theme/MDXComponents.tsx`

**Validation Gate**: Template chapter builds and renders all sections correctly

---

### Phase 3: Module Content Generation

**Objective**: Generate all 48 chapters following the module dependency order.

**Method**: Iterative 1-module-per-cycle with validation gates between modules.

**Module Dependency Order**:

```
Module 1: Foundations (no dependencies)
    ↓
Module 2: Anatomy (depends on Module 1)
    ↓
Module 3: Perception (depends on Module 1)
    ↓
Module 4: Motion (depends on Modules 2, 3)
    ↓
Module 5: Manipulation (depends on Modules 3, 4)
    ↓
Module 6: Learning (depends on Modules 1-5)
    ↓
Module 7: Integration (depends on Modules 1-6)
    ↓
Module 8: Applications (depends on all above)
```

**Per-Module Tasks**:

| ID | Task | Validation |
|----|------|------------|
| M-T1 | Generate chapter MDX files with frontmatter | Frontmatter validates against schema |
| M-T2 | Write Learning Objectives using Bloom's taxonomy | 3-5 objectives per chapter |
| M-T3 | Write Introduction section | 100-200 words |
| M-T4 | Write Theory Content sections | 400-700 words |
| M-T5 | Write Simulation Lab with Colab code | Code executes successfully |
| M-T6 | Write Hardware Lab with ROS2 instructions | Instructions complete with alternatives |
| M-T7 | Write Case Study with real-world example | Background, implementation, results, lessons |
| M-T8 | Write Summary section | Key points covered |
| M-T9 | Write 5+ Quiz questions with explanations | Mix of question types |
| M-T10 | Add IEEE-formatted References | ≥60% peer-reviewed, ≥20% official docs |
| M-T11 | Add extensibility hooks throughout | PersonalizeButton, TranslateButton, rag-zones |
| M-T12 | Module validation gate | Checklist passes |

**Module Generation Schedule**:

| Cycle | Module | Chapters | Word Target | Dependencies |
|-------|--------|----------|-------------|--------------|
| 1 | Foundations | 6 | 8,100 | None |
| 2 | Anatomy | 5 | 6,750 | Module 1 |
| 3 | Perception | 6 | 8,100 | Module 1 |
| 4 | Motion | 7 | 9,450 | Modules 2, 3 |
| 5 | Manipulation | 6 | 8,100 | Modules 3, 4 |
| 6 | Learning | 8 | 10,800 | Modules 1-5 |
| 7 | Integration | 5 | 6,750 | Modules 1-6 |
| 8 | Applications | 5 | 6,750 | All modules |
| **Total** | | **48** | **64,800** | |

**Module Validation Checklist** (per module):

- [ ] All chapters created
- [ ] All frontmatter validates against schema
- [ ] Learning objectives use Bloom's taxonomy verbs
- [ ] Theory content Grade 9-11 reading level
- [ ] Simulation labs have runnable code
- [ ] Hardware labs have simulation alternatives
- [ ] Case studies reference real-world applications
- [ ] 5+ quiz questions per chapter
- [ ] Citations: ≥60% peer-reviewed, ≥20% official docs
- [ ] Extensibility hooks present in all chapters
- [ ] Module builds without errors

---

### Phase 4: Global Editing & Unification

**Objective**: Ensure consistency across all modules and chapters.

**Tasks**:

| ID | Task | Dependencies | Validation |
|----|------|--------------|------------|
| P4-T1 | Unify terminology across chapters | Phase 3 | Glossary terms consistent |
| P4-T2 | Verify IEEE citation format consistency | Phase 3 | All citations formatted correctly |
| P4-T3 | Cross-link related chapters | Phase 3 | Links work, no dead links |
| P4-T4 | Verify reading level (Flesch-Kincaid 9-11) | Phase 3 | All content passes |
| P4-T5 | Add/refine diagrams with consistent styling | Phase 3 | Diagrams render correctly |
| P4-T6 | Verify callout styling consistency | Phase 3 | All callouts use correct syntax |
| P4-T7 | Proofread for grammar and clarity | P4-T1 to P4-T6 | Content error-free |
| P4-T8 | Verify all code blocks have syntax highlighting | Phase 3 | Code renders with colors |
| P4-T9 | Final word count verification | P4-T7 | 50k-80k words total |
| P4-T10 | Citation distribution audit | P4-T2 | Meets percentage requirements |

**Outputs**:
- Unified, cross-linked content
- Consistent styling and formatting
- Verified citation compliance

**Validation Gate**: Full site builds without errors; content audit passes

---

### Phase 5: Extensibility Hooks (Future-Ready)

**Objective**: Implement placeholder components ready for v2 functionality.

**Tasks**:

| ID | Task | Dependencies | Validation |
|----|------|--------------|------------|
| P5-T1 | Finalize PersonalizeButton.tsx with TypeScript interfaces | P2-T1 | Type definitions complete |
| P5-T2 | Finalize TranslateButton.tsx with language props | P2-T2 | Props documented |
| P5-T3 | Finalize RagZone.tsx with data attributes | P2-T3 | Data attributes render in HTML |
| P5-T4 | Document extensibility architecture | P5-T1 to P5-T3 | Architecture.md complete |
| P5-T5 | Create placeholder user schema for future auth | P5-T4 | Schema documented |

**Outputs**:
- `/src/components/personalize-button.tsx` (finalized)
- `/src/components/urdu-translate.tsx` (finalized)
- `/src/components/rag-zone.tsx` (finalized)
- Extensibility architecture documentation

**Note**: Backend RAG/auth NOT implemented in v1; architecture-ready only.

---

### Phase 6: Deployment

**Objective**: Deploy textbook to GitHub Pages with production configuration.

**Tasks**:

| ID | Task | Dependencies | Validation |
|----|------|--------------|------------|
| P6-T1 | Configure GitHub Pages in repository settings | Phase 4 | Settings configured |
| P6-T2 | Update docusaurus.config.js with production URL | P6-T1 | URL resolves correctly |
| P6-T3 | Configure deployment workflow (GitHub Actions) | P6-T2 | Action runs successfully |
| P6-T4 | Test production build locally | Phase 4 | Build succeeds |
| P6-T5 | Deploy to GitHub Pages | P6-T4 | Site live and accessible |
| P6-T6 | Verify all pages load correctly | P6-T5 | No 404 errors |
| P6-T7 | Test PDF export (if implemented) | P6-T5 | PDF generates correctly |
| P6-T8 | Create deployment runbook | P6-T5 | Runbook documented |

**Outputs**:
- Live site on GitHub Pages
- Deployment workflow
- Deployment runbook

**Validation Gate**: Site accessible at production URL; all modules navigable

---

## Quality Checks

### Per-Chapter Checklist

- [ ] Learning objectives at top (3-5, Bloom's taxonomy)
- [ ] Quiz at bottom (5+ questions)
- [ ] IEEE citations (≥5 per chapter)
- [ ] rag-zone blocks included (theory, lab, quiz sections)
- [ ] PersonalizeButton present
- [ ] TranslateButton present
- [ ] Word count: 1,000-1,700 words

### Per-Module Checklist

- [ ] _category_.json complete
- [ ] All chapters created (5-8)
- [ ] Chapter ordering correct
- [ ] Prerequisites accurate
- [ ] Module builds without errors

### Book-Level Checklist

- [ ] 8 modules total
- [ ] 48 chapters total (min 40 required)
- [ ] Total words: 50,000-80,000
- [ ] Citation distribution: ≥60% peer-reviewed, ≥20% official docs
- [ ] Reading level: Grade 9-11
- [ ] Build succeeds without errors
- [ ] Deployment successful

---

## Dependencies Graph

```
Phase 1: Bootstrap
    │
    ├── P1-T1: Init Docusaurus ────────────────┐
    │           │                               │
    │           ├── P1-T2: Config               │
    │           │     │                         │
    │           │     ├── P1-T6: KaTeX          │
    │           │     └── P1-T7: Mermaid        │
    │           │                               │
    │           ├── P1-T3: Module dirs ─────────┤
    │           │     │                         │
    │           │     ├── P1-T8: intro.md       │
    │           │     └── P1-T9: sidebars.js    │
    │           │                               │
    │           ├── P1-T4: Components dir ──────┤
    │           └── P1-T5: Static dirs ─────────┤
    │                                           │
    └── P1-T10: Initial commit ←────────────────┘
              │
              ▼
Phase 2: Template
    │
    ├── P2-T1: PersonalizeButton ──────────────┐
    ├── P2-T2: TranslateButton ────────────────┤
    ├── P2-T3: RagZone ────────────────────────┤
    │                                          │
    ├── P2-T4: MDXComponents ←─────────────────┤
    │     │                                    │
    │     └── P2-T5: chapter-template.mdx      │
    │           │                              │
    │           └── P2-T7: Test template       │
    │                                          │
    ├── P2-T6: Styles ─────────────────────────┘
    └── P2-T8: Document usage
              │
              ▼
Phase 3: Content (Sequential by Module)
    │
    ├── Module 1: Foundations ─────┐
    │     │                        │
    │     ▼                        │
    ├── Module 2: Anatomy ─────────┤ (depends on M1)
    │     │                        │
    │     ▼                        │
    ├── Module 3: Perception ──────┤ (depends on M1)
    │     │                        │
    │     ▼                        │
    ├── Module 4: Motion ──────────┤ (depends on M2, M3)
    │     │                        │
    │     ▼                        │
    ├── Module 5: Manipulation ────┤ (depends on M3, M4)
    │     │                        │
    │     ▼                        │
    ├── Module 6: Learning ────────┤ (depends on M1-M5)
    │     │                        │
    │     ▼                        │
    ├── Module 7: Integration ─────┤ (depends on M1-M6)
    │     │                        │
    │     ▼                        │
    └── Module 8: Applications ────┘ (depends on all)
              │
              ▼
Phase 4: Global Editing
    │
    ├── P4-T1 to P4-T6: Content unification
    │     │
    │     └── P4-T7: Proofreading
    │           │
    │           ├── P4-T9: Word count
    │           └── P4-T10: Citation audit
              │
              ▼
Phase 5: Extensibility (parallel with P4)
    │
    ├── P5-T1 to P5-T3: Finalize components
    │     │
    │     └── P5-T4 to P5-T5: Documentation
              │
              ▼
Phase 6: Deployment
    │
    ├── P6-T1 to P6-T3: Configuration
    │     │
    │     └── P6-T4: Test build
    │           │
    │           └── P6-T5 to P6-T8: Deploy & verify
```

---

## Risks and Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| High word count causes burnout | High | Medium | Iterative phased generation; module validation gates |
| Plagiarism detection failure | High | Low | IEEE citation enforcement; original content mandate |
| Citation sources unavailable | Medium | Medium | DOI links; archive.org fallbacks |
| Isaac Sim API changes | Medium | Low | Version lock; Colab alternatives |
| ROS2 API changes | Low | Low | Target Humble LTS (2027 EOL) |
| Docusaurus version incompatibility | Medium | Low | Lock Docusaurus version; test upgrades |
| Hardware labs inaccessible to students | Medium | High | Simulation alternatives for all hardware labs |

---

## Complexity Tracking

No constitution violations requiring justification. Plan follows smallest-viable-change principle with phased approach.

---

## Acceptance Criteria

- [ ] Plan clearly defines work breakdown structure
- [ ] Dependency flow documented
- [ ] 6 phases with clear entry/exit criteria
- [ ] Module generation order respects prerequisites
- [ ] Validation gates defined between phases
- [ ] Risk mitigations documented

---

## Next Step

**Do you want me to generate `/sp.tasks` now?**

This will create the detailed task breakdown with:
- Individual tasks for each phase
- Task dependencies
- Acceptance criteria per task
- Test cases where applicable
