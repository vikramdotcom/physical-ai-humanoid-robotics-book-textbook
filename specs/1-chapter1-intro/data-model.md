# Data Model: Chapter 1 - Introduction to Physical AI & Humanoid Robotics

**Branch**: `1-chapter1-intro`
**Date**: 2025-12-24

## Entities

### Chapter

A self-contained educational unit representing one chapter of the textbook.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier (e.g., "chapter1") |
| title | string | Yes | Display title |
| slug | string | Yes | URL-safe identifier (e.g., "01-intro") |
| description | string | Yes | Brief chapter summary |
| learningObjectives | LearningObjective[] | Yes | 3-5 measurable outcomes |
| sections | Section[] | Yes | Ordered list of content sections |
| quiz | Quiz | Yes | Assessment questions |
| references | Citation[] | Yes | IEEE-formatted citations |
| metadata | ChapterMetadata | Yes | Word count, readability, etc. |

### Section

A content section within a chapter.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Section identifier (e.g., "01-theory") |
| title | string | Yes | Section heading |
| ragZoneId | string | No | RAG zone identifier if wrapped |
| content | MDXContent | Yes | MDX-formatted content |
| diagrams | Diagram[] | No | Associated visual assets |

### LearningObjective

A measurable learning outcome.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Objective identifier (e.g., "LO1") |
| text | string | Yes | Objective statement |
| bloomLevel | enum | Yes | Bloom's taxonomy level (remember/understand/apply/analyze/evaluate/create) |
| assessmentRef | string[] | Yes | Quiz question IDs that validate this objective |

### Diagram

A visual asset explaining a concept.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Diagram identifier |
| filename | string | Yes | File path relative to assets/ |
| format | enum | Yes | "svg" | "png" |
| altText | string | Yes | Accessibility description |
| caption | string | No | Display caption |
| width | number | No | Display width in pixels |

### Quiz

Assessment component for a chapter.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| chapterId | string | Yes | Parent chapter reference |
| passingScore | number | Yes | Minimum % to pass (default: 70) |
| targetScore | number | Yes | Target % for success (default: 85) |
| questions | QuizQuestion[] | Yes | 5-10 assessment questions |

### QuizQuestion

Individual assessment item.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Question identifier (e.g., "q1") |
| type | enum | Yes | "multiple-choice" | "true-false" | "short-answer" |
| question | string | Yes | Question text |
| options | string[] | Conditional | For multiple-choice only |
| correctAnswer | string | Yes | Correct answer value |
| sectionRef | string | Yes | Source section for the answer |
| explanation | string | Yes | Explanation shown after answering |
| learningObjectiveRef | string | Yes | Which LO this validates |

### Citation

A bibliographic reference.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Citation identifier (e.g., "ref1") |
| type | enum | Yes | "peer-reviewed" | "official-docs" | "other" |
| authors | string[] | Yes | Author names |
| title | string | Yes | Work title |
| venue | string | Yes | Journal/conference/publisher |
| year | number | Yes | Publication year |
| pages | string | No | Page range |
| doi | string | No | Digital Object Identifier |
| url | string | No | Direct link |

### ChapterMetadata

Quality metrics for a chapter.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| wordCount | number | Yes | Total word count |
| fleschKincaid | number | Yes | Readability grade level |
| diagramCount | number | Yes | Number of diagrams |
| citationCount | object | Yes | { peerReviewed, officialDocs, other } |
| lastUpdated | string | Yes | ISO date of last modification |

## Relationships

```
Chapter 1──* Section
Chapter 1──* LearningObjective
Chapter 1──1 Quiz
Chapter 1──* Citation

Section 0──* Diagram
Section 0──1 RAGZone (optional)

Quiz 1──* QuizQuestion

QuizQuestion *──1 LearningObjective (via learningObjectiveRef)
QuizQuestion *──1 Section (via sectionRef)
```

## State Transitions

### Chapter Lifecycle

```
Draft → Review → Published
  │        │
  ↓        ↓
Revision (loops back to Draft)
```

### Quiz Question States

```
Unanswered → Answered → Revealed (with explanation)
```

## Validation Rules

1. **Chapter must have 3-5 learning objectives** (FR-002)
2. **Chapter must have 8+ diagrams** (FR-011)
3. **Chapter must have ≥5 peer-reviewed citations** (FR-012)
4. **Chapter must have ≥3 official-docs citations** (FR-013)
5. **Word count must be 4,000-5,500** (FR-009)
6. **Flesch-Kincaid must be 9-11** (FR-010)
7. **Quiz must have 5-10 questions** (FR-007)
8. **Each learning objective must have at least one quiz question** (assessment coverage)
9. **All diagrams must have alt text** (accessibility)

## Chapter 1 Instance

```json
{
  "id": "chapter1",
  "title": "Introduction to Physical AI & Humanoid Robotics",
  "slug": "01-intro",
  "description": "Foundational concepts bridging AI and embodied systems, motivation for humanoid robotics, course roadmap",
  "learningObjectives": [
    {
      "id": "LO1",
      "text": "Define Physical AI and distinguish it from Digital AI with concrete examples",
      "bloomLevel": "understand",
      "assessmentRef": ["q1", "q2", "q3"]
    },
    {
      "id": "LO2",
      "text": "Explain 3 key advantages of the humanoid form factor for robotics applications",
      "bloomLevel": "understand",
      "assessmentRef": ["q4", "q5", "q6"]
    },
    {
      "id": "LO3",
      "text": "Identify the components of the Physical AI technology stack",
      "bloomLevel": "remember",
      "assessmentRef": ["q7", "q8"]
    },
    {
      "id": "LO4",
      "text": "Navigate the textbook roadmap to plan a personalized learning path",
      "bloomLevel": "apply",
      "assessmentRef": ["q9", "q10"]
    }
  ],
  "sections": [
    { "id": "index", "title": "Chapter Overview" },
    { "id": "01-theory", "title": "What is Physical AI?", "ragZoneId": "chapter1-theory" },
    { "id": "02-why-humanoids", "title": "Why Humanoids?", "ragZoneId": "chapter1-humanoids" },
    { "id": "03-tech-stack", "title": "Technology Stack Overview", "ragZoneId": "chapter1-tech" },
    { "id": "04-roadmap", "title": "Course Roadmap" }
  ],
  "metadata": {
    "wordCount": 4500,
    "fleschKincaid": 10,
    "diagramCount": 8,
    "citationCount": { "peerReviewed": 5, "officialDocs": 3, "other": 0 }
  }
}
```
