import React, { ReactNode } from 'react';

interface RAGZoneMetadata {
  topic?: string;
  keywords?: string[];
}

interface RAGZoneProps {
  /** Unique identifier for RAG indexing */
  id: string;
  /** Content to wrap */
  children: ReactNode;
  /** Optional metadata for enhanced indexing (future) */
  metadata?: RAGZoneMetadata;
}

/**
 * RAGZone - Pass-through wrapper component for v1
 * Wraps content with a data attribute for future RAG (Retrieval-Augmented Generation) integration.
 * The data-rag-zone attribute enables DOM querying for content indexing.
 */
export const RAGZone: React.FC<RAGZoneProps> = ({
  id,
  children,
  metadata,
}) => {
  return (
    <div
      className="rag-zone"
      data-rag-zone={id}
      data-rag-topic={metadata?.topic}
      data-rag-keywords={metadata?.keywords?.join(',')}
    >
      {children}
    </div>
  );
};

export default RAGZone;
