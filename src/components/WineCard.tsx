import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wine } from 'lucide-react';
import type { WineItem } from '../data/wines';

interface WineCardProps {
  wine: WineItem;
  variant?: 'carousel' | 'grid';
}

const WineCard = ({ wine, variant = 'carousel' }: WineCardProps) => {
  if (variant === 'grid') {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        className="snap-start"
      >
        <Link to={`/menu/${wine.id}`}>
          <div className="card-glass h-full flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            {wine.image ? (
              <img
                src={wine.image}
                alt={wine.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sunshine/50 to-seafoam/50 flex items-center justify-center mx-auto mb-4">
                <Wine size={40} className="text-caramel/40" />
              </div>
            )}
            <h3 className="font-display font-semibold text-lg text-caramel mb-2">
              {wine.name}
            </h3>
            <p className="text-caramel/70 text-sm line-clamp-2 mb-3">
              {wine.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              <span className="px-3 py-1 rounded-full bg-seafoam/30 text-caramel text-xs font-medium">
                {wine.scenario}
              </span>
              <span className="px-3 py-1 rounded-full bg-sunshine/50 text-caramel text-xs font-medium">
                {wine.abv} ABV
              </span>
            </div>
            <span className="btn-primary text-sm mt-auto">View Details</span>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex-shrink-0 w-[180px] sm:w-[220px] snap-start"
    >
      <Link to={`/menu/${wine.id}`}>
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-md p-4 hover:shadow-lg transition-shadow h-full flex flex-col items-center text-center">
          {wine.image ? (
            <img
              src={wine.image}
              alt={wine.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-3 shadow-md"
            />
          ) : (
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-sunshine/50 to-seafoam/50 flex items-center justify-center mx-auto mb-3">
              <Wine size={32} className="text-caramel/40" />
            </div>
          )}
          <h3 className="font-display font-semibold text-base text-caramel line-clamp-1 mb-1">
            {wine.name}
          </h3>
          <p className="text-caramel/70 text-xs line-clamp-2 mb-2">
            {wine.description}
          </p>
          <span className="px-2 py-1 rounded-full bg-seafoam/30 text-caramel text-xs font-medium mb-2">
            {wine.scenario}
          </span>
          <span className="text-caramel text-sm font-medium mt-auto">View</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default WineCard;
