import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { wines } from '../data/wines';
import WineCard from '../components/WineCard';

const Menu = () => {
  const [activeScenario, setActiveScenario] = useState<string>('All');

  const scenarios = useMemo(() => {
    const uniqueScenarios = Array.from(new Set(wines.map((w) => w.scenario)));
    return ['All', ...uniqueScenarios];
  }, []);

  const filteredWines = useMemo(() => {
    if (activeScenario === 'All') {
      return wines;
    }
    return wines.filter((wine) => wine.scenario === activeScenario);
  }, [activeScenario]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-8 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-caramel text-center mb-8">
          Full Sparkling Menu
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario) => (
            <button
              key={scenario}
              onClick={() => setActiveScenario(scenario)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeScenario === scenario
                  ? 'bg-caramel text-white shadow-lg'
                  : 'bg-white/60 text-caramel hover:bg-white/80'
              }`}
            >
              {scenario}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} variant="grid" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
