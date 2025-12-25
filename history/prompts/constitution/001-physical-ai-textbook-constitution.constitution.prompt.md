---
id: 001
title: Physical AI Textbook Constitution
stage: constitution
date: 2025-12-24
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: unknown
command: /sp.constitution
labels: ["constitution", "physical-ai", "robotics", "textbook", "docusaurus"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - N/A
---

## Prompt

# /sp.constitution

**Project: Textbook for Teaching Physical AI & Humanoid Robotics**

## Core principles
- Educational excellence through structured pedagogy (theory → simulation → hardware → case studies)
- Accuracy via primary sources (peer-reviewed papers, robotics datasets, official docs from NVIDIA/ROS/OpenAI)
- Modularity for extensibility (Docusaurus components hook-ready for RAG, auth, personalization, translation)
- Accessibility for diverse learners (global students, varying software/hardware backgrounds)

## Key standards
- Content format: Docusaurus Markdown with MDX for interactive elements (e.g., code playgrounds, simulations)
- Source citation: IEEE style, embedded via Docusaurus plugins
- Source types: ≥60% peer-reviewed (ICRA, IROS, RSS papers), ≥20% official repos (ROS2, MuJoCo, Isaac Sim)
- Plagiarism: 0% tolerance (Spec-Kit Plus auto-check)
- Writing clarity: Flesch-Kincaid grade 9-11, active voice, examples with visuals
- Structure: 12-15 chapters, each with objectives, theory, labs, quizzes, extensibility hooks

## Constraints
- Tech stack: Spec-Kit Plus + Claude Code for generation; Docusaurus v3 + GitHub Pages deploy
- Book length: 200-300 pages (50k-80k words), PDF exportable
- Chapter template: Objectives | Theory | Simulations (Colab/Isaac Lab) | Hardware Labs (ROS2/Gazebo) | Case Studies | Quiz | **Extensibility Hooks** (RAG zones, personalize/translate buttons)
- Repo structure: `/docs` (content), `/src` (components/hooks for future RAG/auth), `/public` (assets)
- Initial scope: Core book only; reserve MDX props/slots for future (e.g., `<PersonalizeButton />`, `<TranslateButton urdu />`, `<RAGQueryZone />`)

## Extensibility mandates (non-functional for v1, required for architecture)
- Each chapter starts with logged-in user buttons: "Personalize (based on background)" + "Translate to Urdu"
- Content zones marked for RAG: `<rag-zone id="chapter1-theory">...</rag-zone>`
- Auth hooks: Better-Auth integration-ready (user profile stores background: software={beginner/advanced}

## Response snapshot

Created initial constitution v1.0.0 for Physical AI & Humanoid Robotics Textbook project with 6 core principles:

1. **Educational Excellence Through Structured Pedagogy**: Chapter flow from objectives → theory → simulations → hardware labs → case studies → quiz
2. **Accuracy Via Primary Sources**: ≥60% peer-reviewed, ≥20% official docs, IEEE citations
3. **Modularity for Extensibility**: RAG zones, PersonalizeButton, TranslateButton placeholders, Better-Auth ready
4. **Accessibility for Diverse Learners**: Flesch-Kincaid 9-11, multiple modalities, simulation fallbacks
5. **Content Quality Standards**: 12-15 chapters, 200-300 pages, PDF export, runnable code
6. **Test-First Development**: Learning objectives first, assessment before content, review gates

Constitution includes Key Standards (content format, chapter template, citation requirements), Constraints & Architecture (tech stack, repo structure, scope boundaries), and Governance (amendment process, versioning policy, compliance review).

## Outcome

- ✅ Impact: Initial constitution ratified, establishing governance for textbook project
- 🧪 Tests: N/A (constitution document)
- 📁 Files: .specify/memory/constitution.md created/updated
- 🔁 Next prompts: /sp.specify for first chapter or feature specification
- 🧠 Reflection: User provided comprehensive principles; converted template placeholders to concrete educational standards

## Evaluation notes (flywheel)

- Failure modes observed: None - user input was comprehensive
- Graders run and results (PASS/FAIL): Manual validation PASS (no unresolved placeholders, valid semantic version)
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Consider adding hardware tier definitions for clearer lab requirements
