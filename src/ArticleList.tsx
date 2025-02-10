import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExternalLink } from 'lucide-react';

function ArticleList() {
  const [articles, setArticles] = useState<{ title: string; content: string }[]>([]);

  useEffect(() => {
    const loadArticles = async () => {
      const articleFiles = ["article1.md", "article2.md",'article3.md']; // List markdown files here
      const loadedArticles = await Promise.all(
        articleFiles.map(async (file) => {
          const response = await fetch(`/articles/${file}`);
          const text = await response.text();
          return { title: file.replace(".md", ""), content: text || "" }; // Ensure it's a string
        })
      );
      setArticles(loadedArticles);
    };
    loadArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <section id="articles" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white">Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-white">{article.title}</h3>
                <ReactMarkdown
                  className="prose text-gray-200 prose-headings:text-white prose-strong:text-white prose-p:text-gray-300"
                  remarkPlugins={[remarkGfm]}
                >
                  {article.content.substring(0, 200) || "No content available..."} 
                </ReactMarkdown>
                <Link
                  to={`/article/${article.title}`}
                  className="text-blue-300 hover:text-blue-200 transition-colors flex items-center mt-4"
                >
                  Read More <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleList;
