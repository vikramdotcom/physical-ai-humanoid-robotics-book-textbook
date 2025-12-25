# Research: Chapter 1 - Introduction to Physical AI & Humanoid Robotics

**Branch**: `1-chapter1-intro`
**Date**: 2025-12-24
**Status**: Complete

## Technical Context Resolution

### Docusaurus v3 + MDX Setup

**Decision**: Use Docusaurus v3.6+ with MDX 3.x for chapter content.

**Rationale**:
- MDX 3.x provides robust JSX-in-Markdown support required for extensibility components
- Docusaurus v3 has native support for custom React components
- GitHub Pages deployment is straightforward via `docusaurus deploy`
- PDF export possible via `docusaurus-plugin-docgen` or `docusaurus-prince-pdf`

**Alternatives Considered**:
- Next.js + MDX: More flexible but requires custom deployment; overkill for static textbook
- GitBook: Limited MDX component support
- MkDocs: Python-based, lacks React component ecosystem

### Extensibility Component Architecture

**Decision**: Create stub React components in `/src/components/extensibility/` that render placeholder UI.

**Rationale**:
- Components can be incrementally enhanced without content changes
- MDX imports work seamlessly with Docusaurus
- TypeScript ensures type safety for future API integration

**Component Specifications**:

```tsx
// PersonalizeButton.tsx - Stub for v1
export const PersonalizeButton = () => (
  <button disabled className="personalize-stub">
    Personalize (coming soon)
  </button>
);

// TranslateButton.tsx - Stub for v1
export const TranslateButton = ({ lang = 'urdu' }) => (
  <button disabled className="translate-stub">
    Translate to {lang} (coming soon)
  </button>
);

// RAGZone.tsx - Pass-through wrapper for v1
export const RAGZone = ({ id, children }) => (
  <div data-rag-zone={id} className="rag-zone">
    {children}
  </div>
);
```

### Quiz Implementation

**Decision**: JSON-based quiz format with client-side rendering via QuizRenderer component.

**Rationale**:
- JSON is easily parseable for future RAG integration
- No backend required for v1 self-check functionality
- Can be enhanced to POST results to API in future

**Quiz JSON Schema**:
```json
{
  "chapterId": "chapter1",
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which of the following is an example of Physical AI?",
      "options": ["A. ChatGPT", "B. Boston Dynamics Spot", "C. Netflix recommendations", "D. Google Search"],
      "correctAnswer": "B",
      "sectionRef": "01-theory.mdx",
      "explanation": "Physical AI systems have embodied agents that interact with the real world..."
    }
  ]
}
```

### Diagram Standards

**Decision**: SVG format for diagrams, PNG fallback, stored in `/public/images/chapter1/`.

**Rationale**:
- SVG scales perfectly for PDF export and web
- Alt text embedded in MDX for accessibility
- Consistent naming: `ch1-[topic]-diagram.svg`

**Required Diagrams for Chapter 1** (8+ per FR-011):
1. `ch1-physical-ai-vs-digital-ai.svg` - Comparison diagram
2. `ch1-physical-ai-stack.svg` - Perception → Planning → Control → Actuation
3. `ch1-humanoid-anatomy.svg` - Subsystems breakdown
4. `ch1-humanoid-advantages.svg` - 3 key advantages visualization
5. `ch1-sim-to-real-gap.svg` - Domain transfer concept
6. `ch1-course-roadmap.svg` - 12-chapter progression
7. `ch1-tech-stack-overview.svg` - Tools ecosystem
8. `ch1-example-robots.svg` - Physical AI examples collage

### Citation Management

**Decision**: Use `@docusaurus/plugin-ideal-image` + custom IEEE citation component.

**Rationale**:
- IEEE format required by constitution
- Custom component enables consistent formatting
- References stored in chapter-level `references.json` for validation

**Citation Component Usage**:
```mdx
<Cite id="ref1" /> renders as [1]

// In References section:
<References data={references} /> renders IEEE-formatted list
```

### Research Sources for Chapter 1 Content

**Peer-Reviewed (≥5 required)**:

1. **Embodied AI definition**: Duan et al., "A Survey of Embodied AI: From Simulators to Research Tasks," IEEE Trans. on Emerging Topics in Computational Intelligence, 2022
2. **Humanoid advantages**: Harada et al., "Humanoid Robot," Springer Handbook of Robotics, 2016 (Chapter)
3. **Physical AI systems**: Brooks, "Intelligence Without Representation," Artificial Intelligence, 1991 (foundational)
4. **Sim-to-real**: Tobin et al., "Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World," IROS 2017
5. **Humanoid locomotion history**: Kajita et al., "Introduction to Humanoid Robotics," Springer, 2014

**Official Documentation (≥3 required)**:

1. **ROS2 documentation**: https://docs.ros.org/en/humble/
2. **NVIDIA Isaac Sim**: https://developer.nvidia.com/isaac-sim
3. **MuJoCo**: https://mujoco.readthedocs.io/

### Content Structure Mapping

Based on FR-001 through FR-016 and constitution chapter template:

```
docs/01-intro/
├── index.mdx              # Imports, metadata, <UserControls />
│   ├── Learning Objectives (3-5)
│   └── Chapter overview
├── 01-theory.mdx          # <rag-zone id="chapter1-theory">
│   ├── What is Physical AI?
│   ├── Physical AI vs Digital AI
│   ├── The Physical AI Stack
│   └── </rag-zone>
├── 02-why-humanoids.mdx   # <rag-zone id="chapter1-humanoids">
│   ├── Humanoid Form Factor
│   ├── 3 Key Advantages
│   └── Humanoid Anatomy Overview
├── 03-tech-stack.mdx      # <rag-zone id="chapter1-tech">
│   ├── Simulation Tools (Isaac Lab, MuJoCo, Gazebo)
│   ├── Hardware Platforms
│   └── Software Stack (ROS2, PyTorch)
├── 04-roadmap.mdx         # Course progression
│   ├── Chapter Dependencies
│   ├── Prerequisites
│   └── Learning Paths
├── quiz.json              # 10 questions
├── references.json        # IEEE citations
└── assets/
    ├── ch1-physical-ai-vs-digital-ai.svg
    ├── ch1-physical-ai-stack.svg
    ├── ch1-humanoid-anatomy.svg
    ├── ch1-humanoid-advantages.svg
    ├── ch1-sim-to-real-gap.svg
    ├── ch1-course-roadmap.svg
    ├── ch1-tech-stack-overview.svg
    └── ch1-example-robots.svg
```

## Resolved Unknowns Summary

| Unknown | Resolution | Source |
|---------|-----------|--------|
| MDX component syntax | JSX with Docusaurus v3 | Docusaurus docs |
| Quiz format | JSON + QuizRenderer component | Best practice |
| Diagram format | SVG with PNG fallback | Accessibility + PDF export |
| Citation format | Custom IEEE component | Constitution requirement |
| RAG zone syntax | `<RAGZone id="...">` wrapper | User input + best practice |
| File structure | index.mdx + numbered sections | Docusaurus convention |

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| MDX parsing errors with custom components | Test each component in isolation before chapter integration |
| PDF export breaks with complex SVG | Provide PNG fallbacks; test early with `prince` |
| Citation count falls short | Front-load research; maintain citation backlog |
| Word count exceeds 5,500 | Modular structure allows trimming specific sections |
