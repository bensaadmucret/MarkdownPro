import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Editor } from './components/Editor';
import { MarkdownPreview } from './components/MarkdownPreview';

const defaultMarkdown = `# Welcome to MarkdownPro

Start typing your markdown here...

## Features

- Live preview with Marked
- Syntax highlighting with CodeMirror
- GitHub Flavored Markdown support
- Dark theme optimized for long sessions
- Export functionality
- Clipboard support

## Try Some Markdown

### Code Blocks

\`\`\`javascript
const greeting = 'Hello, World!';
console.log(greeting);
\`\`\`

### Tables

| Feature | Status |
|---------|--------|
| Markdown | ✅ |
| Preview | ✅ |
| Export | ✅ |

### Task Lists

- [x] Create markdown editor
- [x] Add syntax highlighting
- [x] Implement preview
- [ ] Add more features
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  const handleChange = useCallback((value: string) => {
    setMarkdownText(value);
  }, []);

  const downloadMarkdown = () => {
    const blob = new Blob([markdownText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownText);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header onCopy={copyToClipboard} onDownload={downloadMarkdown} />
      <main className="container mx-auto flex h-[calc(100vh-4rem)] gap-4 p-4">
        <div className="w-1/2 overflow-hidden rounded-lg bg-gray-800 shadow-lg">
          <Editor value={markdownText} onChange={handleChange} />
        </div>
        <div className="w-1/2 overflow-auto rounded-lg bg-gray-800 p-6 shadow-lg">
          <MarkdownPreview content={markdownText} />
        </div>
      </main>
    </div>
  );
}

export default App;