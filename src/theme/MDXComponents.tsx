import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// Import our custom components
import { PersonalizeButton } from '@site/src/components/extensibility/PersonalizeButton';
import { TranslateButton } from '@site/src/components/extensibility/TranslateButton';
import { RAGZone } from '@site/src/components/extensibility/RAGZone';
import { UserControls } from '@site/src/components/extensibility/UserControls';
import { Cite } from '@site/src/components/citations/Cite';
import { References } from '@site/src/components/citations/References';
import { QuizRenderer } from '@site/src/components/quiz/QuizRenderer';

export default {
  // Spread the default components
  ...MDXComponents,

  // Add our custom components for global availability in MDX
  PersonalizeButton,
  TranslateButton,
  RAGZone,
  UserControls,
  Cite,
  References,
  QuizRenderer,
};
