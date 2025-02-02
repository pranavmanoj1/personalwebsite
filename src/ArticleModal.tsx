// ArticleModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleModalProps {
  article: { title: string; content: string };
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full max-h-[85vh] overflow-y-auto relative">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-gray-900 p-4">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[75vh] p-4">
          <ReactMarkdown
            className="prose text-gray-200 prose-headings:text-white prose-strong:text-white prose-p:text-gray-300"
            remarkPlugins={[remarkGfm]}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;

