import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const getExcerpt = (html: string) => {
    const text = html.replace(/<[^>]*>/g, '');
    return text.length > 120 ? text.substring(0, 120) + '...' : text;
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex-shrink-0 w-[260px] sm:w-[300px] snap-start"
    >
      <Link to={`/knowledge/${article.id}`}>
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
          {article.coverImage ? (
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
          ) : (
            <div className="w-full h-40 bg-gradient-to-br from-sunshine to-seafoam" />
          )}
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-display font-semibold text-lg text-caramel line-clamp-2 mb-2">
              {article.title}
            </h3>
            <p className="text-caramel/70 text-sm line-clamp-2 mb-3 flex-1">
              {getExcerpt(article.content)}
            </p>
            <div className="flex items-center gap-1 text-caramel/60 text-sm">
              <Clock size={14} />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
