import React from 'react';

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

interface ReferencesProps {
  /** Citation data from references.json */
  data: Citation[];
}

/**
 * Formats authors in IEEE style
 * Single author: "A. Smith"
 * Two authors: "A. Smith and B. Jones"
 * Three+ authors: "A. Smith, B. Jones, and C. Brown"
 */
const formatAuthors = (authors: string[]): string => {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;

  const lastAuthor = authors[authors.length - 1];
  const otherAuthors = authors.slice(0, -1).join(', ');
  return `${otherAuthors}, and ${lastAuthor}`;
};

/**
 * References - IEEE-formatted reference list component
 * Renders a numbered list of citations in IEEE format.
 * Includes links for DOI and URL if provided.
 */
export const References: React.FC<ReferencesProps> = ({ data }) => {
  return (
    <div className="references-section">
      <h2>References</h2>
      <ol
        style={{
          paddingLeft: '20px',
          listStyleType: 'none',
          counterReset: 'ref-counter',
        }}
      >
        {data.map((citation, index) => {
          const number = index + 1;
          const refId = citation.id || `ref${number}`;

          // IEEE format: Authors, "Title," Venue, pp. pages, year.
          let ieeeFormat = `${formatAuthors(citation.authors)}, "${citation.title}," ${citation.venue}`;
          if (citation.pages) {
            ieeeFormat += `, pp. ${citation.pages}`;
          }
          ieeeFormat += `, ${citation.year}.`;

          return (
            <li
              key={refId}
              id={refId}
              style={{
                marginBottom: '12px',
                paddingLeft: '30px',
                position: 'relative',
                transition: 'background-color 0.3s ease',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  fontWeight: 'bold',
                  color: 'var(--ifm-color-primary, #2e8555)',
                }}
              >
                [{number}]
              </span>
              <span>{ieeeFormat}</span>
              {citation.doi && (
                <>
                  {' '}
                  <a
                    href={`https://doi.org/${citation.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--ifm-color-primary, #2e8555)' }}
                  >
                    DOI: {citation.doi}
                  </a>
                </>
              )}
              {citation.url && !citation.doi && (
                <>
                  {' '}
                  <a
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--ifm-color-primary, #2e8555)' }}
                  >
                    [Link]
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default References;
