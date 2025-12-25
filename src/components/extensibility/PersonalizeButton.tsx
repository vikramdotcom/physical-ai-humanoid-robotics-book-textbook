import React from 'react';

interface UserBackground {
  software: 'beginner' | 'intermediate' | 'advanced';
  hardware: 'none' | 'basic' | 'advanced';
}

interface PersonalizeButtonProps {
  /** Chapter or section ID for personalization context */
  contextId?: string;
  /** Callback when personalization is requested (future) */
  onPersonalize?: (userBackground: UserBackground) => void;
}

/**
 * PersonalizeButton - Stub component for v1
 * Renders a disabled button placeholder for future personalization feature.
 * When enabled (v2+), will allow users to customize content based on their background.
 */
export const PersonalizeButton: React.FC<PersonalizeButtonProps> = ({
  contextId,
}) => {
  return (
    <button
      disabled
      className="personalize-stub"
      data-context-id={contextId}
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
      Personalize (coming soon)
    </button>
  );
};

export default PersonalizeButton;
