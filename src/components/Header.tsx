import React from 'react';
import { FileText, Download, Copy, Github } from 'lucide-react';

interface HeaderProps {
  onCopy: () => void;
  onDownload: () => void;
}

export function Header({ onCopy, onDownload }: HeaderProps) {
  return (
    <header className="border-b border-gray-700 bg-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-blue-400" />
            <h1 className="text-xl font-bold">MarkdownPro</h1>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={onCopy}
              className="flex items-center space-x-2 rounded bg-gray-700 px-4 py-2 hover:bg-gray-600 transition-colors"
              title="Copy to clipboard"
            >
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </button>
            <button
              onClick={onDownload}
              className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 hover:bg-blue-500 transition-colors"
              title="Download markdown file"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded bg-gray-700 px-4 py-2 hover:bg-gray-600 transition-colors"
              title="View on GitHub"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}