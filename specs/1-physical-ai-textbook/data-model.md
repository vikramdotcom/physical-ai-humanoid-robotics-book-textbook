# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `1-physical-ai-textbook`
**Date**: 2025-12-27

---

## Overview

This document defines the content entities and their relationships for the Physical AI & Humanoid Robotics textbook. As a static documentation site, these entities exist as file structures and MDX frontmatter rather than database tables.

---

## Core Entities

### Module

Top-level organizational unit containing thematically related chapters.

**Location**: `docs/module-{N}-{slug}/`

**Attributes**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| number | int | Yes | Module number (1-8) |
| title | string | Yes | Human-readable title |
| slug | string | Yes | URL-safe identifier |
| description | string | Yes | Module summary (1-2 sentences) |
| prerequisites | string[] | No | List of required prior knowledge |
| learning_outcomes | string[] | Yes | Module-level learning objectives |
| chapter_count | int | Derived | Number of chapters in module |

**File Structure**:
```
docs/module-1-foundations/
├── _category_.json      # Module metadata for Docusaurus sidebar
├── 1-1-what-is-physical-ai.mdx
├── 1-2-history-of-robotics-ai.mdx
└── ...
```

**_category_.json Schema**:
```json
{
  "label": "Module 1: Foundations of Physical AI",
  "position": 1,
  "collapsible": true,
  "collapsed": false,
  "link": {
    "type": "generated-index",
    "description": "Module description text",
    "keywords": ["physical-ai", "foundations", "introduction"]
  }
}
```

---

### Chapter

Individual lesson unit with standardized educational sections.

**Location**: `docs/module-{N}-{slug}/{chapter-number}-{chapter-slug}.mdx`

**Frontmatter Schema**:
```yaml
---
id: string                      # Unique identifier (e.g., "1-1-what-is-physical-ai")
title: string                   # Human-readable title
sidebar_label: string           # Short label for sidebar
sidebar_position: int           # Order within module (1-8)
description: string             # SEO meta description
keywords: string[]              # SEO keywords

# Custom metadata
module: int                     # Module number (1-8)
chapter: int                    # Chapter number within module
reading_time: int               # Estimated minutes to read
difficulty: enum                # "beginner" | "intermediate" | "advanced"
prerequisites: string[]         # Required prior chapter IDs
learning_objectives: string[]   # 3-5 measurable objectives (Bloom's taxonomy)

# Lab metadata
simulation_lab:
  platform: enum                # "colab" | "isaac-sim"
  notebook_url: string?         # Colab link if applicable
  scene_file: string?           # Isaac Sim scene if applicable
  estimated_time: int           # Minutes

hardware_lab:
  platform: string              # "ros2-humble"
  hardware: enum                # "jetson-nano" | "jetson-orin" | "simulation-only"
  estimated_time: int           # Minutes
  packages: string[]            # Required ROS2 packages

# Versioning
version: string                 # Semantic version (e.g., "1.0.0")
last_updated: date              # ISO date
authors:
  - name: string
    email: string?
---
```

**Content Sections** (required):
1. Learning Objectives
2. Introduction
3. Theory Content (multiple subsections)
4. Simulation Lab
5. Hardware Lab
6. Case Study
7. Summary
8. Quiz (5+ questions)
9. References
10. Further Reading

---

### Learning Objective

Measurable outcome statement using Bloom's Taxonomy verbs.

**Location**: Chapter frontmatter `learning_objectives` array

**Format**:
```yaml
learning_objectives:
  - "Define what physical AI means and identify its key components"
  - "Compare and contrast physical AI with traditional robotics and pure AI"
  - "Evaluate real-world applications of physical AI systems"
```

**Bloom's Taxonomy Verbs by Level**:
| Level | Verbs |
|-------|-------|
| Remember | Define, list, identify, name, recall |
| Understand | Describe, explain, summarize, compare |
| Apply | Demonstrate, implement, solve, use |
| Analyze | Differentiate, analyze, examine, distinguish |
| Evaluate | Evaluate, assess, justify, critique |
| Create | Design, develop, construct, formulate |

---

### Simulation Lab

Hands-on exercise using cloud or desktop simulation.

**Location**: Section within chapter MDX file

**Structure**:
```markdown
## Simulation Lab: [Lab Title]

**Platform**: [Google Colab / Isaac Sim]
**Estimated Time**: [X minutes]
**Difficulty**: [Beginner/Intermediate/Advanced]

### Objectives
- [Lab objective 1]
- [Lab objective 2]

### Setup
[Environment setup instructions]

### Procedure
```python
# Step-by-step code with explanations
```

### Expected Results
[Observable outcomes]

### Troubleshooting
[Common issues and solutions]
```

**Colab Notebook Naming**: `static/notebooks/{module}-{chapter}-{lab-slug}.ipynb`

---

### Hardware Lab

Physical robotics exercise using ROS2 and Jetson.

**Location**: Section within chapter MDX file

**Structure**:
```markdown
## Hardware Lab: [Lab Title]

**Platform**: ROS2 Humble
**Hardware**: Jetson [Nano/Orin]
**Estimated Time**: [X minutes]
**Difficulty**: [Beginner/Intermediate/Advanced]

### Prerequisites
- [Hardware requirements]
- [Software requirements]

### Safety Notes
:::caution Safety Warning
[Safety considerations]
:::

### Procedure
[Step-by-step instructions]

### Verification
[How to confirm success]

### Simulation Alternative
[For students without hardware]
```

---

### Case Study

Real-world application example demonstrating chapter concepts.

**Location**: Section within chapter MDX file

**Structure**:
```markdown
## Case Study: [Title]

### Background
[Context and problem statement]

### Implementation
[How the solution was built/deployed]

### Results
[Quantitative and qualitative outcomes]

### Lessons Learned
[Key takeaways for students]
```

**Examples Pool**:
| Domain | Company/Project | Concepts Demonstrated |
|--------|-----------------|----------------------|
| Manufacturing | Tesla Optimus | Humanoid design, manipulation |
| Healthcare | Intuitive Da Vinci | Teleoperation, precision control |
| Research | Boston Dynamics Atlas | Dynamic locomotion, balance |
| Logistics | Amazon Sparrow | Grasping, perception |
| Social | Hanson Sophia | Human-robot interaction |

---

### Quiz Question

Assessment item with multiple-choice format.

**Location**: Quiz section within chapter MDX file

**Structure**:
```markdown
### Question N

[Question text]

A) [Option A]
B) [Option B]
C) [Option C]
D) [Option D]

<details>
<summary>Answer</summary>
**[Correct Letter]**: [Explanation of why correct and why others incorrect]
</details>
```

**Question Types**:
| Type | Purpose | Example |
|------|---------|---------|
| Recall | Test terminology | "What does DOF stand for?" |
| Conceptual | Test understanding | "Why is ZMP important for bipedal walking?" |
| Applied | Test application | "Which sensor would best detect..." |
| Analysis | Test critical thinking | "What are the tradeoffs between..." |

**Minimum**: 5 questions per chapter
**Distribution**: Mix of question types covering chapter objectives

---

### Citation

Academic or documentation reference in IEEE format.

**Location**: References section at chapter end

**Format**:
```markdown
## References

[1] A. Author, "Article Title," *Journal Name*, vol. X, no. Y, pp. XX-YY, Month Year. doi: 10.xxxx/xxxxx

[2] A. Author and B. Coauthor, "Conference Paper Title," in *Proc. Conf. Name*, City, Country, Year, pp. XX-YY.

[3] Organization, "Documentation Title," Version X.Y, Year. [Online]. Available: URL
```

**Citation Tracking** (per chapter):
| Type | Target % | Count Required |
|------|----------|----------------|
| Peer-reviewed (ICRA, IROS, RSS) | ≥60% | 3-5 |
| Official docs (ROS2, NVIDIA) | ≥20% | 1-2 |
| Other verified | ≤20% | 0-2 |

---

## Entity Relationships

```
Module (1) ──────────< Chapter (5-8)
                          │
                          ├── Learning Objectives (3-5)
                          ├── Simulation Lab (1)
                          ├── Hardware Lab (1)
                          ├── Case Study (1)
                          ├── Quiz Questions (5+)
                          └── Citations (5-8)
```

---

## Validation Rules

### Module Validation
- [ ] Contains 5-8 chapters
- [ ] Has _category_.json with required fields
- [ ] Prerequisites reference valid modules

### Chapter Validation
- [ ] All frontmatter fields present
- [ ] 3-5 learning objectives using Bloom's verbs
- [ ] All required sections present
- [ ] Word count within 1,000-1,700 range
- [ ] 5+ quiz questions
- [ ] 5+ citations with ≥60% peer-reviewed

### Citation Validation
- [ ] IEEE format followed
- [ ] DOI links where available
- [ ] URLs accessible
- [ ] Distribution meets targets

---

## Extensibility Hooks

### PersonalizeButton Component
```tsx
interface PersonalizeButtonProps {
  chapterId: string;
  // Future: userBackground, learningPreferences
}
```

### TranslateButton Component
```tsx
interface TranslateButtonProps {
  lang: "urdu" | string;
  chapterId: string;
  // Future: translationService
}
```

### RagZone Component
```tsx
interface RagZoneProps {
  id: string;  // e.g., "chapter-1-theory", "chapter-1-quiz"
  children: React.ReactNode;
  // Future: ragServiceEndpoint
}
```
