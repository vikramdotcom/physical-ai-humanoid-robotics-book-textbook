<!--
SYNC IMPACT REPORT
==================
Version change: 0.0.0 → 1.0.0 (MAJOR - initial constitution ratification)

Modified principles: N/A (new constitution)

Added sections:
  - Core Principles (6 principles)
    - I. Educational Excellence Through Structured Pedagogy
    - II. Accuracy Via Primary Sources
    - III. Modularity for Extensibility
    - IV. Accessibility for Diverse Learners
    - V. Content Quality Standards
    - VI. Test-First Development
  - Key Standards
  - Constraints & Architecture
  - Governance

Removed sections: N/A

Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ Compatible (Constitution Check section aligns)
  - .specify/templates/spec-template.md: ✅ Compatible (user stories support educational content structure)
  - .specify/templates/tasks-template.md: ✅ Compatible (phase-based approach supports chapter development)

Deferred items: None

==================
-->

# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. Educational Excellence Through Structured Pedagogy

Every chapter MUST follow a structured pedagogical flow that progresses from foundational theory to practical application:

1. **Learning Objectives**: Clear, measurable outcomes stated upfront
2. **Theory**: Core concepts with visual explanations and worked examples
3. **Simulations**: Hands-on exercises using Colab/Isaac Lab environments
4. **Hardware Labs**: ROS2/Gazebo practical implementations
5. **Case Studies**: Real-world robotics applications demonstrating concepts
6. **Assessment**: Quiz and self-evaluation opportunities
7. **Extensibility Hooks**: RAG zones and personalization/translation placeholders

**Rationale**: This progression ensures learners build mental models before applying them, reducing cognitive overload and improving retention.

### II. Accuracy Via Primary Sources

All technical content MUST be grounded in authoritative sources:

- **Peer-reviewed papers**: ≥60% of citations MUST come from ICRA, IROS, RSS, or equivalent robotics venues
- **Official documentation**: ≥20% from official repositories (ROS2, MuJoCo, Isaac Sim, NVIDIA docs)
- **Remaining sources**: Reputable textbooks, verified datasets, or official project documentation
- **Citation format**: IEEE style, embedded via Docusaurus plugins
- **Plagiarism tolerance**: 0% - all content MUST be original or properly attributed

**Rationale**: Students deserve accurate, verifiable information. Primary sources ensure technical correctness and provide pathways for deeper learning.

### III. Modularity for Extensibility

The architecture MUST support future enhancements without restructuring:

- **RAG-ready zones**: Content areas marked with `<rag-zone id="...">` for future AI-powered Q&A
- **Personalization hooks**: `<PersonalizeButton />` placeholders for background-adaptive content
- **Translation slots**: `<TranslateButton urdu />` placeholders for localization
- **Auth integration**: Better-Auth ready architecture with user profile schema (background: software={beginner/advanced}, hardware={none/basic/advanced})
- **Component isolation**: Each MDX component MUST be independently testable

**Rationale**: Educational technology evolves rapidly. Building extensibility into the architecture from day one prevents costly rewrites.

### IV. Accessibility for Diverse Learners

Content MUST accommodate learners with varying backgrounds and abilities:

- **Writing clarity**: Flesch-Kincaid grade level 9-11 (accessible yet technical)
- **Voice**: Active voice preferred; passive only when technically necessary
- **Prerequisites**: Each chapter MUST state assumed knowledge and link to remediation
- **Multiple modalities**: Theory explained via text, diagrams, code samples, and video references
- **Software backgrounds**: Content MUST support both software-experienced and novice learners
- **Hardware access**: Labs MUST provide simulation alternatives for those without physical hardware

**Rationale**: Physical AI education should not be gatekept by prior experience or resource access.

### V. Content Quality Standards

All content MUST meet quantifiable quality thresholds:

- **Book scope**: 12-15 chapters, 200-300 pages (50k-80k words)
- **PDF export**: All content MUST render correctly to PDF format
- **Code examples**: All code MUST be runnable in specified environments (Colab, ROS2, Isaac Lab)
- **Visual standards**: Diagrams MUST use consistent styling; equations MUST use LaTeX/KaTeX
- **Cross-references**: Related concepts MUST link to their explanations
- **Version control**: All content changes tracked via Git with meaningful commits

**Rationale**: Measurable standards prevent quality drift and ensure consistency across chapters.

### VI. Test-First Development

Content development MUST follow verification principles:

- **Learning objectives first**: Define what students should know before writing content
- **Assessment before content**: Quiz questions drafted before detailed explanations
- **Code testing**: All code samples MUST be execution-verified before publication
- **Review gates**: Each chapter requires technical review and pedagogical review
- **Validation checkpoints**: Content reviewed against spec before merge

**Rationale**: Test-first thinking ensures content achieves educational goals rather than just covering topics.

## Key Standards

### Content Format
- **Platform**: Docusaurus v3 with MDX support
- **Interactive elements**: Code playgrounds, embedded simulations where feasible
- **Static export**: GitHub Pages deployment
- **Source control**: Git with conventional commits

### Chapter Template
Each chapter MUST include:

```
1. Extensibility Buttons (placeholder)
   - <PersonalizeButton /> (logged-in users)
   - <TranslateButton urdu /> (logged-in users)

2. Learning Objectives
   - 3-5 measurable outcomes per chapter

3. Theory Section
   - <rag-zone id="chapterN-theory">
   - Core concepts, diagrams, equations
   - </rag-zone>

4. Simulations Section
   - Colab notebooks / Isaac Lab exercises
   - Step-by-step instructions

5. Hardware Labs Section
   - ROS2/Gazebo implementations
   - Simulation fallback provided

6. Case Studies Section
   - 1-2 real-world applications
   - Analysis and lessons learned

7. Quiz Section
   - 5-10 questions per chapter
   - Mix of conceptual and practical

8. References
   - IEEE format citations
```

### Source Citation Requirements
| Source Type | Minimum % | Examples |
|-------------|-----------|----------|
| Peer-reviewed | ≥60% | ICRA, IROS, RSS papers |
| Official docs | ≥20% | ROS2, MuJoCo, Isaac Sim, NVIDIA |
| Other | ≤20% | Textbooks, verified tutorials |

## Constraints & Architecture

### Tech Stack
- **Content generation**: Spec-Kit Plus + Claude Code
- **Documentation platform**: Docusaurus v3
- **Deployment**: GitHub Pages
- **Future auth**: Better-Auth (architecture-ready, not implemented in v1)

### Repository Structure
```
/docs                    # Docusaurus content (chapters, guides)
/src                     # React components, MDX hooks
  /components            # Reusable UI components
    /extensibility       # PersonalizeButton, TranslateButton, RAGQueryZone (stub)
/public                  # Static assets (images, diagrams)
/specs                   # Feature specifications
/history                 # PHRs and ADRs
/.specify                # SpecKit Plus configuration
```

### Scope Boundaries

**In Scope (v1)**:
- 12-15 chapter textbook content
- Docusaurus static site
- Simulation labs (Colab, Isaac Lab references)
- Hardware labs (ROS2/Gazebo guides)
- PDF export capability
- Extensibility placeholder components

**Out of Scope (v1, architecture-ready)**:
- User authentication
- RAG-powered Q&A
- Personalization engine
- Translation system
- User progress tracking

## Governance

### Amendment Process
1. Propose amendment via PR with rationale
2. Technical review for feasibility
3. Pedagogical review for educational impact
4. Documentation of decision in ADR if architecturally significant
5. Update constitution version per semantic versioning

### Versioning Policy
- **MAJOR**: Principle removal, fundamental scope change, backward-incompatible structure
- **MINOR**: New principle added, section materially expanded, new constraint
- **PATCH**: Clarifications, typo fixes, non-semantic refinements

### Compliance Review
- All PRs MUST verify alignment with constitution principles
- Chapter completeness checked against chapter template
- Source citations verified against minimum percentages
- Extensibility hooks verified present in each chapter

### Runtime Guidance
For day-to-day development decisions, consult:
- `CLAUDE.md` for agent-specific workflow guidance
- `specs/<feature>/plan.md` for feature-specific technical decisions
- `history/adr/` for recorded architectural decisions

**Version**: 1.0.0 | **Ratified**: 2025-12-24 | **Last Amended**: 2025-12-24
