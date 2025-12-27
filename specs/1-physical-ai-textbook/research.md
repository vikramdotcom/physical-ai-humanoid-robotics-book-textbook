# Research Document: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `1-physical-ai-textbook`
**Date**: 2025-12-27
**Spec**: [spec.md](./spec.md)

---

## Research Summary

This document consolidates research findings for the Physical AI & Humanoid Robotics textbook implementation, resolving all technical context unknowns and documenting best practices for content generation.

---

## Technical Decisions

### 1. Documentation Platform

**Decision**: Docusaurus v3 with MDX support

**Rationale**:
- Native MDX support enables React component embedding (PersonalizeButton, TranslateButton, rag-zone)
- Built-in sidebar navigation and versioning
- Static site generation for GitHub Pages deployment
- Active community and Docusaurus ecosystem
- KaTeX support for mathematical equations

**Alternatives Considered**:
- GitBook: Less customizable for React components
- MkDocs: Limited MDX/React integration
- VitePress: Smaller ecosystem, Vue-based
- Sphinx: Better for API docs, weaker for educational content

### 2. Simulation Lab Platform

**Decision**: Google Colab (primary) + NVIDIA Isaac Sim (advanced)

**Rationale**:
- Google Colab: Zero-setup, free GPU access, browser-based
- Isaac Sim: Industry-standard robotics simulation, physics-accurate
- Colab provides accessibility; Isaac Sim provides professional-grade simulation
- Both platforms support Python-based robotics workflows

**Alternatives Considered**:
- Gazebo only: Limited GPU access for students
- ROS2 local-only: Barrier to entry for beginners
- PyBullet only: Less realistic physics than Isaac Sim

### 3. Hardware Lab Framework

**Decision**: ROS2 Humble (LTS) targeting NVIDIA Jetson platform

**Rationale**:
- ROS2 Humble: LTS support until 2027, stable API
- Jetson platform: Cost-effective edge AI, strong robotics ecosystem
- Jetson Nano for beginners, Jetson Orin for advanced labs
- Direct simulation-to-hardware transfer path

**Alternatives Considered**:
- ROS2 Iron: Not LTS, shorter support window
- ROS1: End-of-life, not recommended for new projects
- Raspberry Pi: Limited AI/ML acceleration

### 4. Content Generation Workflow

**Decision**: Module-by-module sequential generation with validation gates

**Rationale**:
- Prevents prerequisite gaps
- Enables iterative quality review
- Supports parallel citation collection
- Allows early feedback incorporation

**Generation Order**:
1. Module 1: Foundations (no dependencies)
2. Module 2: Anatomy (depends on Module 1)
3. Module 3: Perception (depends on Module 1)
4. Module 4: Motion (depends on Modules 2, 3)
5. Module 5: Manipulation (depends on Modules 3, 4)
6. Module 6: Learning (depends on Modules 1-5)
7. Module 7: Integration (depends on all above)
8. Module 8: Applications (can reference all)

### 5. Citation Management

**Decision**: IEEE format with DOI links, managed via Docusaurus footnotes

**Rationale**:
- IEEE standard for robotics publications
- DOI provides permanent links
- Docusaurus footnotes provide clean rendering
- Archive.org fallback for link rot prevention

**Citation Distribution Target**:
- ≥60% peer-reviewed (ICRA, IROS, RSS, RA-L, IJRR)
- ≥20% official documentation (ROS2, Isaac Sim, NVIDIA, OpenAI)
- ≤20% other verified sources

### 6. Word Count Strategy

**Decision**: 1,000-1,700 words per chapter (average ~1,350)

**Rationale**:
- 48 chapters × 1,350 words = 64,800 words (within 50k-80k target)
- Allows variance for complexity (foundations shorter, advanced longer)
- Excludes code blocks, frontmatter from word count
- Includes all prose sections (objectives, theory, labs, case studies, quiz)

**Distribution**:
| Section | Target Words | % of Chapter |
|---------|--------------|--------------|
| Learning Objectives | 50-100 | 5% |
| Introduction | 100-200 | 10% |
| Theory Content | 400-700 | 40% |
| Simulation Lab | 150-250 | 15% |
| Hardware Lab | 150-250 | 15% |
| Case Study | 100-150 | 10% |
| Quiz + Summary | 50-100 | 5% |

### 7. Extensibility Architecture

**Decision**: Placeholder components with typed props, ready for future implementation

**Rationale**:
- Components render as visual placeholders in v1
- TypeScript interfaces define future API contracts
- No backend dependencies in v1
- Clean upgrade path for v2 features

**Components**:
```tsx
// PersonalizeButton.tsx (v1 stub)
export const PersonalizeButton = () => (
  <button disabled className="personalize-btn">
    Personalize (Coming Soon)
  </button>
);

// TranslateButton.tsx (v1 stub)
export const TranslateButton = ({ lang }: { lang: string }) => (
  <button disabled className="translate-btn">
    Translate to {lang} (Coming Soon)
  </button>
);

// RagZone.tsx (v1 stub)
export const RagZone = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <div data-rag-zone={id}>{children}</div>
);
```

---

## Best Practices Research

### Docusaurus MDX Best Practices

1. **Frontmatter**: Keep structured data in YAML frontmatter
2. **Component imports**: Use global component registration via MDXComponents.tsx
3. **Code blocks**: Use language hints for syntax highlighting
4. **Admonitions**: Use `:::note`, `:::tip`, `:::warning`, `:::caution` for callouts
5. **Math**: Use `$$` for block equations, `$` for inline with KaTeX
6. **Cross-references**: Use `[text](/docs/path)` for internal links

### Grade 9-11 Writing Best Practices

1. **Sentence length**: Average 15-20 words
2. **Paragraph length**: 3-5 sentences
3. **Vocabulary**: Introduce technical terms with definitions
4. **Active voice**: "The robot moves" not "The robot is moved"
5. **Concrete examples**: Follow abstract concepts with specific examples
6. **Visual aids**: Reference diagrams for complex concepts

### IEEE Citation Format

```
[1] A. Author, "Article Title," Journal Name, vol. X, no. Y, pp. XX-YY, Month Year. doi: 10.xxxx/xxxxx
[2] A. Author and B. Coauthor, "Conference Paper Title," in Proc. Conf. Name, City, Country, Year, pp. XX-YY.
[3] Organization, "Documentation Title," Version X.Y, Year. [Online]. Available: URL
```

### ROS2 Humble Lab Structure

1. **Prerequisites section**: List required packages
2. **Workspace setup**: Standard colcon workspace commands
3. **Launch file patterns**: XML or Python launch files
4. **Verification**: `ros2 topic list`, `ros2 node list` checks
5. **Troubleshooting**: Common error messages and solutions

---

## Risk Mitigations

| Risk | Research Finding | Mitigation |
|------|------------------|------------|
| Citation link rot | DOIs persist; URLs fail ~3% per year | Use DOI where available; archive.org fallbacks |
| Isaac Sim version changes | NVIDIA updates ~quarterly | Lock to specific version in labs; document upgrade paths |
| Colab package changes | Google updates runtime regularly | Pin package versions in notebook headers |
| ROS2 API evolution | Humble has stable API until 2027 | Restrict to Humble-specific features only |
| Word count variance | Some topics need more depth | Budget 10% overflow capacity per module |

---

## Open Items Resolved

All technical context unknowns from the plan template have been resolved:

| Item | Resolution |
|------|------------|
| Language/Version | MDX + TypeScript for components, Python for labs |
| Primary Dependencies | Docusaurus v3, React 18, KaTeX |
| Storage | Static files only (GitHub Pages) |
| Testing | Content validation via build; code samples tested in Colab |
| Target Platform | Web (Docusaurus), Colab (simulation), Jetson (hardware) |
| Project Type | Documentation site (static) |
| Performance Goals | Build time <5 min, page load <2s |
| Constraints | 50k-80k words, IEEE citations, Grade 9-11 reading level |
| Scale/Scope | 8 modules, 48 chapters, ~65,000 words |

---

## Next Steps

1. Phase 1: Scaffold Docusaurus project with module folders
2. Phase 1: Create chapter MDX template with extensibility hooks
3. Phase 2: Generate module content in dependency order
4. Phase 3: Unified editing and citation verification
5. Phase 4: Deployment to GitHub Pages
