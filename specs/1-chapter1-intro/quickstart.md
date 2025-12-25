# Quickstart: Chapter 1 Implementation

**Branch**: `1-chapter1-intro`
**Date**: 2025-12-24

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Spec-Kit Plus configured

## Step 1: Initialize Docusaurus Project

```bash
# From repository root
npx create-docusaurus@latest . classic --typescript

# Install additional dependencies
npm install @docusaurus/plugin-ideal-image
```

## Step 2: Create Extensibility Components

Create stub components in `/src/components/extensibility/`:

```bash
mkdir -p src/components/extensibility
mkdir -p src/components/quiz
mkdir -p src/components/citations
```

Create each component file per contracts/components.md specifications.

## Step 3: Create Chapter Directory Structure

```bash
mkdir -p docs/01-intro/assets
```

Expected structure:
```
docs/01-intro/
├── index.mdx
├── 01-theory.mdx
├── 02-why-humanoids.mdx
├── 03-tech-stack.mdx
├── 04-roadmap.mdx
├── quiz.json
├── references.json
└── assets/
    └── (8 diagrams)
```

## Step 4: Create Content Files

### index.mdx
- Import UserControls component
- Render learning objectives (4 objectives per data-model.md)
- Chapter overview paragraph

### 01-theory.mdx
- Wrap in RAGZone with id="chapter1-theory"
- Define Physical AI vs Digital AI
- Include Physical AI stack diagram
- Add 2+ Cite references

### 02-why-humanoids.mdx
- Wrap in RAGZone with id="chapter1-humanoids"
- 3 key advantages section
- Humanoid anatomy diagram
- Add 2+ Cite references

### 03-tech-stack.mdx
- Wrap in RAGZone with id="chapter1-tech"
- Simulation tools overview (Isaac Lab, MuJoCo, Gazebo)
- Hardware platforms mention
- Software stack (ROS2, PyTorch)
- Add 2+ Cite references

### 04-roadmap.mdx
- Course progression diagram
- Chapter dependencies
- Prerequisites section
- Learning paths guidance

## Step 5: Create Quiz JSON

Create `docs/01-intro/quiz.json` with 10 questions:
- Q1-Q3: Validate LO1 (Physical AI definition)
- Q4-Q6: Validate LO2 (Humanoid advantages)
- Q7-Q8: Validate LO3 (Tech stack)
- Q9-Q10: Validate LO4 (Roadmap navigation)

## Step 6: Create References JSON

Create `docs/01-intro/references.json` with ≥8 citations:
- 5+ peer-reviewed (ICRA, IROS, RSS)
- 3+ official docs (ROS2, NVIDIA, MuJoCo)

## Step 7: Create Diagrams

Create 8 SVG diagrams in `docs/01-intro/assets/`:
1. ch1-physical-ai-vs-digital-ai.svg
2. ch1-physical-ai-stack.svg
3. ch1-humanoid-anatomy.svg
4. ch1-humanoid-advantages.svg
5. ch1-sim-to-real-gap.svg
6. ch1-course-roadmap.svg
7. ch1-tech-stack-overview.svg
8. ch1-example-robots.svg

Each diagram must have:
- Clear visual hierarchy
- Consistent color scheme
- Alt text in MDX import

## Step 8: Validate

### Word Count
```bash
# Target: 4,000-5,500 words
find docs/01-intro -name "*.mdx" -exec cat {} + | wc -w
```

### Readability
```bash
# Use online tool or textstat Python library
# Target: Flesch-Kincaid 9-11
```

### Build Test
```bash
npm run build
# Should complete without errors
```

### Component Test
```bash
npm run start
# Navigate to /01-intro
# Verify:
# - UserControls renders at top
# - RAGZone wrappers have data-rag-zone attributes
# - Quiz renders and is interactive
# - Cite links scroll to References
```

## Step 9: Quality Checklist

- [ ] 4 learning objectives stated
- [ ] 8+ diagrams with alt text
- [ ] 5+ peer-reviewed citations
- [ ] 3+ official doc citations
- [ ] 10 quiz questions (5-10 range)
- [ ] Word count 4,000-5,500
- [ ] Flesch-Kincaid 9-11
- [ ] UserControls at chapter start
- [ ] RAGZone wrappers in place
- [ ] All MDX parses without errors

## Validation Commands

```bash
# Full build test
npm run build

# Development server
npm run start

# Citation count
grep -c "Cite id=" docs/01-intro/*.mdx

# RAG zone count
grep -c "RAGZone" docs/01-intro/*.mdx
```

## Expected Output

After completing all steps:
- Chapter 1 accessible at `/01-intro`
- All extensibility hooks functional (stub mode)
- Quiz interactive with score display
- References section with IEEE formatting
- 8 diagrams rendering correctly

## Next Steps

After Chapter 1 is complete and validated:
1. Run `/sp.tasks` to generate implementation tasks
2. Proceed to Chapter 2 specification
3. Establish component library for reuse across chapters
