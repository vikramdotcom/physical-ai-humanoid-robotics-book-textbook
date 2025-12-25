import React from 'react';

interface CiteProps {
  /** Reference ID from references.json */
  id: string;
}

/**
 * Cite - Inline citation marker component
 * Renders a clickable [N] that scrolls to the reference in the References section.
 * The number is derived from the reference ID (e.g., "ref1" -> [1]).
 */
export const Cite: React.FC<CiteProps> = ({ id }) => {
  // Extract number from id (e.g., "ref1" -> 1, "ref10" -> 10)
  const match = id.match(/\d+/);
  const number = match ? match[0] : id;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight the reference briefly
      element.style.backgroundColor = 'var(--ifm-color-primary-light, #ffeb3b)';
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 2000);
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="cite-link"
      style={{
        color: 'var(--ifm-color-primary, #2e8555)',
        textDecoration: 'none',
        fontWeight: 500,
        cursor: 'pointer',
      }}
      title={`Jump to reference ${number}`}
    >
      [{number}]
    </a>
  );
};

export default Cite;
