import React from 'react';
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false,
});

interface MarkdownPreviewProps {
  content: string;
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const html = marked(content);

  return (
    <div 
      className="prose prose-invert prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}