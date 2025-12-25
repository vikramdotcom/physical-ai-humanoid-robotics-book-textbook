# Component Contracts: Chapter 1

**Branch**: `1-chapter1-intro`
**Date**: 2025-12-24

## React Component Interfaces

### PersonalizeButton

**Location**: `/src/components/extensibility/PersonalizeButton.tsx`

```typescript
interface PersonalizeButtonProps {
  /** Chapter or section ID for personalization context */
  contextId?: string;
  /** Callback when personalization is requested (future) */
  onPersonalize?: (userBackground: UserBackground) => void;
}

interface UserBackground {
  software: 'beginner' | 'intermediate' | 'advanced';
  hardware: 'none' | 'basic' | 'advanced';
}

// v1 Implementation: Stub that renders disabled button
export const PersonalizeButton: React.FC<PersonalizeButtonProps> = ({
  contextId
}) => JSX.Element;
```

**v1 Behavior**:
- Renders disabled button with "Personalize (coming soon)" text
- Accepts props for future compatibility but ignores them
- Applies `.personalize-stub` CSS class for styling

---

### TranslateButton

**Location**: `/src/components/extensibility/TranslateButton.tsx`

```typescript
interface TranslateButtonProps {
  /** Target language for translation */
  lang: 'urdu' | 'arabic' | 'hindi' | 'spanish';
  /** Content ID to translate (future) */
  contentId?: string;
}

// v1 Implementation: Stub that renders disabled button
export const TranslateButton: React.FC<TranslateButtonProps> = ({
  lang
}) => JSX.Element;
```

**v1 Behavior**:
- Renders disabled button with "Translate to {lang} (coming soon)" text
- Accepts `lang` prop to display target language
- Applies `.translate-stub` CSS class for styling

---

### RAGZone

**Location**: `/src/components/extensibility/RAGZone.tsx`

```typescript
interface RAGZoneProps {
  /** Unique identifier for RAG indexing */
  id: string;
  /** Content to wrap */
  children: React.ReactNode;
  /** Optional metadata for enhanced indexing (future) */
  metadata?: {
    topic?: string;
    keywords?: string[];
  };
}

// v1 Implementation: Pass-through wrapper with data attribute
export const RAGZone: React.FC<RAGZoneProps> = ({
  id,
  children
}) => JSX.Element;
```

**v1 Behavior**:
- Renders `<div data-rag-zone={id}>` wrapper around children
- Content passes through unchanged
- Applies `.rag-zone` CSS class (no visual styling by default)
- `data-rag-zone` attribute enables future DOM querying for RAG integration

---

### UserControls

**Location**: `/src/components/extensibility/UserControls.tsx`

```typescript
interface UserControlsProps {
  /** Chapter ID for context */
  chapterId: string;
  /** Languages available for translation */
  translateLangs?: ('urdu' | 'arabic' | 'hindi' | 'spanish')[];
}

// Composite component rendering PersonalizeButton + TranslateButton(s)
export const UserControls: React.FC<UserControlsProps> = ({
  chapterId,
  translateLangs = ['urdu']
}) => JSX.Element;
```

**v1 Behavior**:
- Renders horizontal flex container with PersonalizeButton and TranslateButton(s)
- Default: one TranslateButton for Urdu
- Applies `.user-controls` CSS class for layout

---

### QuizRenderer

**Location**: `/src/components/quiz/QuizRenderer.tsx`

```typescript
interface QuizRendererProps {
  /** Quiz data from JSON file */
  quiz: Quiz;
  /** Show explanations after answering */
  showExplanations?: boolean;
  /** Callback when quiz is completed */
  onComplete?: (score: QuizScore) => void;
}

interface Quiz {
  chapterId: string;
  passingScore: number;
  targetScore: number;
  questions: QuizQuestion[];
}

interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string;
  sectionRef: string;
  explanation: string;
  learningObjectiveRef: string;
}

interface QuizScore {
  correct: number;
  total: number;
  percentage: number;
  passed: boolean;
  metTarget: boolean;
}

export const QuizRenderer: React.FC<QuizRendererProps> = ({
  quiz,
  showExplanations = true,
  onComplete
}) => JSX.Element;
```

**v1 Behavior**:
- Renders questions one at a time or all at once (configurable)
- Tracks user answers in local state
- Shows score and explanations on completion
- No persistence (refresh resets quiz)

---

### Cite

**Location**: `/src/components/citations/Cite.tsx`

```typescript
interface CiteProps {
  /** Reference ID from references.json */
  id: string;
}

// Renders inline citation marker [N]
export const Cite: React.FC<CiteProps> = ({ id }) => JSX.Element;
```

**v1 Behavior**:
- Renders clickable `[N]` that scrolls to reference in References section
- Number derived from reference order in chapter

---

### References

**Location**: `/src/components/citations/References.tsx`

```typescript
interface ReferencesProps {
  /** Citation data from references.json */
  data: Citation[];
}

interface Citation {
  id: string;
  type: 'peer-reviewed' | 'official-docs' | 'other';
  authors: string[];
  title: string;
  venue: string;
  year: number;
  pages?: string;
  doi?: string;
  url?: string;
}

// Renders IEEE-formatted reference list
export const References: React.FC<ReferencesProps> = ({
  data
}) => JSX.Element;
```

**v1 Behavior**:
- Renders numbered list in IEEE format
- Links DOI/URL if provided
- Anchors for scroll-to from Cite components

## MDX Usage Examples

### Chapter Index (index.mdx)

```mdx
---
title: Introduction to Physical AI & Humanoid Robotics
sidebar_position: 1
---

import { UserControls } from '@site/src/components/extensibility/UserControls';

<UserControls chapterId="chapter1" translateLangs={['urdu']} />

## Learning Objectives

By the end of this chapter, you will be able to:

1. Define Physical AI and distinguish it from Digital AI with concrete examples
2. Explain 3 key advantages of the humanoid form factor
3. Identify components of the Physical AI technology stack
4. Navigate the textbook roadmap to plan your learning path
```

### Theory Section (01-theory.mdx)

```mdx
---
title: What is Physical AI?
sidebar_position: 2
---

import { RAGZone } from '@site/src/components/extensibility/RAGZone';
import { Cite } from '@site/src/components/citations/Cite';

<RAGZone id="chapter1-theory">

## Defining Physical AI

Physical AI refers to artificial intelligence systems that are **embodied**—they have
a physical presence in the world and can perceive, reason about, and act upon their
environment <Cite id="ref1" />.

Unlike Digital AI systems such as ChatGPT or recommendation engines that operate purely
in the digital realm, Physical AI must handle the challenges of:

- **Sensing**: Converting real-world signals to data
- **Uncertainty**: Dealing with noisy, incomplete information
- **Real-time constraints**: Acting fast enough to be useful
- **Physical interaction**: Applying forces to objects safely

![Physical AI Stack](/images/chapter1/ch1-physical-ai-stack.svg)

</RAGZone>
```

### Quiz Section

```mdx
---
title: Chapter Quiz
sidebar_position: 6
---

import { QuizRenderer } from '@site/src/components/quiz/QuizRenderer';
import quiz from './quiz.json';

<QuizRenderer quiz={quiz} showExplanations={true} />
```
