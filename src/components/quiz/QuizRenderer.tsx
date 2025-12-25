import React, { useState } from 'react';

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

interface Quiz {
  chapterId: string;
  passingScore: number;
  targetScore: number;
  questions: QuizQuestion[];
}

interface QuizScore {
  correct: number;
  total: number;
  percentage: number;
  passed: boolean;
  metTarget: boolean;
}

interface QuizRendererProps {
  /** Quiz data from JSON file */
  quiz: Quiz;
  /** Show explanations after answering */
  showExplanations?: boolean;
  /** Callback when quiz is completed */
  onComplete?: (score: QuizScore) => void;
}

/**
 * QuizRenderer - Interactive quiz component
 * Renders quiz questions and tracks user answers.
 * Shows score and explanations on completion.
 */
export const QuizRenderer: React.FC<QuizRendererProps> = ({
  quiz,
  showExplanations = true,
  onComplete,
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<QuizScore | null>(null);

  const handleAnswerChange = (questionId: string, answer: string) => {
    if (!submitted) {
      setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    }
  };

  const handleSubmit = () => {
    const correct = quiz.questions.filter(
      (q) => answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase()
    ).length;
    const total = quiz.questions.length;
    const percentage = Math.round((correct / total) * 100);

    const quizScore: QuizScore = {
      correct,
      total,
      percentage,
      passed: percentage >= quiz.passingScore,
      metTarget: percentage >= quiz.targetScore,
    };

    setScore(quizScore);
    setSubmitted(true);
    onComplete?.(quizScore);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const getOptionStyle = (questionId: string, option: string, correctAnswer: string) => {
    if (!submitted) {
      return {
        backgroundColor: answers[questionId] === option ? 'var(--ifm-color-primary-light, #e3f2fd)' : 'transparent',
      };
    }

    const isCorrect = option.charAt(0) === correctAnswer;
    const isSelected = answers[questionId] === option;

    if (isCorrect) {
      return { backgroundColor: '#c8e6c9', borderColor: '#4caf50' };
    }
    if (isSelected && !isCorrect) {
      return { backgroundColor: '#ffcdd2', borderColor: '#f44336' };
    }
    return {};
  };

  return (
    <div className="quiz-renderer" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Chapter Quiz</h2>
      <p style={{ marginBottom: '24px', color: 'var(--ifm-color-secondary-darker, #666)' }}>
        Test your understanding of the key concepts. Target score: {quiz.targetScore}%
      </p>

      {quiz.questions.map((question, index) => (
        <div
          key={question.id}
          style={{
            marginBottom: '24px',
            padding: '16px',
            border: '1px solid var(--ifm-color-emphasis-300, #ddd)',
            borderRadius: '8px',
          }}
        >
          <p style={{ fontWeight: 'bold', marginBottom: '12px' }}>
            {index + 1}. {question.question}
          </p>

          {question.type === 'multiple-choice' && question.options && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {question.options.map((option) => (
                <label
                  key={option}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    border: '1px solid var(--ifm-color-emphasis-300, #ddd)',
                    borderRadius: '4px',
                    cursor: submitted ? 'default' : 'pointer',
                    ...getOptionStyle(question.id, option, question.correctAnswer),
                  }}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    disabled={submitted}
                    style={{ marginRight: '12px' }}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}

          {question.type === 'true-false' && (
            <div style={{ display: 'flex', gap: '16px' }}>
              {['True', 'False'].map((option) => (
                <label
                  key={option}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 24px',
                    border: '1px solid var(--ifm-color-emphasis-300, #ddd)',
                    borderRadius: '4px',
                    cursor: submitted ? 'default' : 'pointer',
                    ...getOptionStyle(question.id, option, question.correctAnswer),
                  }}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    disabled={submitted}
                    style={{ marginRight: '8px' }}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}

          {submitted && showExplanations && (
            <div
              style={{
                marginTop: '12px',
                padding: '12px',
                backgroundColor: 'var(--ifm-color-emphasis-100, #f5f5f5)',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              <strong>Explanation:</strong> {question.explanation}
              <br />
              <em style={{ color: 'var(--ifm-color-secondary-darker, #666)' }}>
                Reference: {question.sectionRef}
              </em>
            </div>
          )}
        </div>
      ))}

      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < quiz.questions.length}
            style={{
              padding: '12px 32px',
              fontSize: '16px',
              backgroundColor: 'var(--ifm-color-primary, #2e8555)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: Object.keys(answers).length < quiz.questions.length ? 'not-allowed' : 'pointer',
              opacity: Object.keys(answers).length < quiz.questions.length ? 0.5 : 1,
            }}
          >
            Submit Quiz
          </button>
        ) : (
          <div>
            <div
              style={{
                padding: '24px',
                marginBottom: '16px',
                backgroundColor: score?.passed ? '#c8e6c9' : '#ffcdd2',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ margin: 0 }}>
                Your Score: {score?.correct}/{score?.total} ({score?.percentage}%)
              </h3>
              <p style={{ margin: '8px 0 0 0' }}>
                {score?.metTarget
                  ? '🎉 Excellent! You met the target score!'
                  : score?.passed
                  ? '✅ You passed! Review the explanations to strengthen your understanding.'
                  : '📚 Keep studying! Review the chapter sections and try again.'}
              </p>
            </div>
            <button
              onClick={handleReset}
              style={{
                padding: '12px 32px',
                fontSize: '16px',
                backgroundColor: 'var(--ifm-color-secondary, #6c757d)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizRenderer;
