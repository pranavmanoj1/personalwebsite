import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ArticlePage() {
  const { title } = useParams();  // Get the article title from the URL
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/articles/${title}.md`);  // Fetch raw Markdown
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setContent("Error loading article.");
      }
    };

    fetchArticle();
  }, [title]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">{title?.replace(/-/g, ' ')}</h1>
        <ReactMarkdown
          className="prose text-gray-200 prose-headings:text-white prose-strong:text-white prose-p:text-gray-300"
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
        <Link to="/" className="text-blue-300 hover:text-blue-200 mt-4 block">Back to Articles</Link>
      </div>
    </div>
  );
}

export default ArticlePage;
