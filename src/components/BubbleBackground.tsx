import { motion } from 'framer-motion';

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  duration: number;
  delay: number;
  blur: number;
  opacity: number;
}

const generateBubbles = (): Bubble[] => {
  const bubbles: Bubble[] = [];
  const colors = ['#FBE29D', '#C0DDDA'];
  const count = 20;

  for (let i = 0; i < count; i++) {
    bubbles.push({
      id: i,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 5,
      blur: Math.random() > 0.7 ? 8 : 0,
      opacity: Math.random() * 0.3 + 0.2,
    });
  }

  return bubbles;
};

const bubbles = generateBubbles();

const BubbleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-cloud via-seafoam/10 to-sunshine/20" />
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            filter: bubble.blur > 0 ? `blur(${bubble.blur}px)` : 'none',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
