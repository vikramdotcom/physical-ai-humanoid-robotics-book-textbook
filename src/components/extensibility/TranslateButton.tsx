import React from 'react';

type SupportedLanguage = 'urdu' | 'arabic' | 'hindi' | 'spanish';

interface TranslateButtonProps {
  /** Target language for translation */
  lang: SupportedLanguage;
  /** Content ID to translate (future) */
  contentId?: string;
}

const languageNames: Record<SupportedLanguage, string> = {
  urdu: 'Urdu',
  arabic: 'Arabic',
  hindi: 'Hindi',
  spanish: 'Spanish',
};

/**
 * TranslateButton - Stub component for v1
 * Renders a disabled button placeholder for future translation feature.
 * When enabled (v2+), will allow users to translate content to their preferred language.
 */
export const TranslateButton: React.FC<TranslateButtonProps> = ({
  lang,
  contentId,
}) => {
  const languageName = languageNames[lang] || lang;

  return (
    <button
      disabled
      className="translate-stub"
      data-lang={lang}
      data-content-id={contentId}
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#f5f5f5',
        color: '#888',
        cursor: 'not-allowed',
        fontSize: '14px',
      }}
    >
      Translate to {languageName} (coming soon)
    </button>
  );
};

export default TranslateButton;
