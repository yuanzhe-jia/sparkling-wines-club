import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto card-glass">
          <h1 className="font-display text-3xl text-caramel mb-4">Article not found.</h1>
          <Link to="/" className="text-caramel hover:text-caramel/70 font-medium inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-caramel/70 hover:text-caramel mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="card-glass">
          {article.coverImage && (
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full max-h-96 object-cover rounded-xl mb-8"
            />
          )}

          <h1 className="font-display text-3xl md:text-4xl font-bold text-caramel mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-1 text-caramel/60">
              <Clock size={16} />
              <span>{article.readTime} min read</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-seafoam/30 text-caramel text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none text-caramel/80 prose-headings:font-display prose-headings:text-caramel prose-p:leading-relaxed prose-strong:text-caramel"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleDetail;
