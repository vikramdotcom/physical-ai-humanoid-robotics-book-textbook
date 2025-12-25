import React from 'react';
import { PersonalizeButton } from './PersonalizeButton';
import { TranslateButton } from './TranslateButton';

type SupportedLanguage = 'urdu' | 'arabic' | 'hindi' | 'spanish';

interface UserControlsProps {
  /** Chapter ID for context */
  chapterId: string;
  /** Languages available for translation */
  translateLangs?: SupportedLanguage[];
}

/**
 * UserControls - Composite component for chapter-level user controls
 * Renders PersonalizeButton and TranslateButton(s) in a horizontal layout.
 * Default: one TranslateButton for Urdu.
 */
export const UserControls: React.FC<UserControlsProps> = ({
  chapterId,
  translateLangs = ['urdu'],
}) => {
  return (
    <div
      className="user-controls"
      style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: 'var(--ifm-background-surface-color, #f8f9fa)',
        borderRadius: '8px',
        flexWrap: 'wrap',
      }}
    >
      <PersonalizeButton contextId={chapterId} />
      {translateLangs.map((lang) => (
        <TranslateButton key={lang} lang={lang} contentId={chapterId} />
      ))}
    </div>
  );
};

export default UserControls;
