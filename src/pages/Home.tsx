import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';
import { wines } from '../data/wines';
import HorizontalCarousel from '../components/HorizontalCarousel';
import ArticleCard from '../components/ArticleCard';
import WineCard from '../components/WineCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWines = useMemo(() => {
    if (!searchQuery.trim()) {
      return wines.slice(0, 10);
    }
    const query = searchQuery.toLowerCase();
    return wines
      .filter(
        (wine) =>
          wine.name.toLowerCase().includes(query) ||
          wine.description.toLowerCase().includes(query) ||
          wine.recipe.toLowerCase().includes(query) ||
          wine.scenario.toLowerCase().includes(query) ||
          wine.mood.toLowerCase().includes(query)
      )
      .slice(0, 10);
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-8"
    >
      <section className="text-center mb-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-5xl md:text-7xl font-bold text-caramel mb-4"
        >
          Bubble Bliss
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-caramel/70 font-medium italic"
        >
          Sparkling Sips, Island Vibes.
        </motion.p>
      </section>

      <section className="mb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-caramel">
              Bubbly Knowledge
            </h2>
          </div>
          <HorizontalCarousel>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      <section className="mb-16 px-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search your sparkling mood..."
        />
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-caramel">
              Today's Picks
            </h2>
            <Link
              to="/menu"
              className="text-caramel font-medium hover:text-caramel/70 transition flex items-center gap-1"
            >
              More <span>→</span>
            </Link>
          </div>
          {filteredWines.length > 0 ? (
            <HorizontalCarousel scrollAmount={240}>
              {filteredWines.map((wine) => (
                <WineCard key={wine.id} wine={wine} variant="carousel" />
              ))}
            </HorizontalCarousel>
          ) : (
            <div className="text-center py-12">
              <p className="text-caramel/60 text-lg">
                No bubbles found. Try a different word!
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
