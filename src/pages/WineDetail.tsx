import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Wine } from 'lucide-react';
import { wines } from '../data/wines';

const WineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const wine = wines.find((w) => w.id === id);

  if (!wine) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto card-glass">
          <h1 className="font-display text-3xl text-caramel mb-4">Wine not found.</h1>
          <Link to="/menu" className="text-caramel hover:text-caramel/70 font-medium inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-caramel/70 hover:text-caramel mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Menu
        </Link>

        <div className="card-glass text-center">
          {wine.image ? (
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              src={wine.image}
              alt={wine.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto mb-8 shadow-xl"
            />
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-sunshine/50 to-seafoam/50 flex items-center justify-center mx-auto mb-8 shadow-xl"
            >
              <Wine size={64} className="text-caramel/40" />
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-4xl font-bold text-caramel mb-6"
          >
            {wine.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <span className="px-4 py-2 rounded-full bg-seafoam/30 text-caramel font-medium">
              {wine.scenario}
            </span>
            <span className="px-4 py-2 rounded-full bg-sunshine/50 text-caramel font-medium">
              {wine.mood}
            </span>
            <span className="px-4 py-2 rounded-full bg-caramel/10 text-caramel font-medium">
              {wine.abv} ABV
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-caramel/80 text-lg leading-relaxed mb-8"
          >
            {wine.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-seafoam/20 rounded-2xl p-6 text-left"
          >
            <h3 className="font-display text-xl font-semibold text-caramel mb-3">
              Recipe
            </h3>
            <p className="text-caramel/80 leading-relaxed">{wine.recipe}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WineDetail;
