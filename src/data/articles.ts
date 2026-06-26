export interface Article {
  id: string;
  title: string;
  coverImage: string;
  content: string;
  tags: string[];
  readTime: number;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Champagne vs. Sparkling Wine: What's the Difference?",
    coverImage: "/images/articles/a1.jpg",
    content: `<p>All Champagne is sparkling wine, but not all sparkling wine is Champagne. The key difference lies in the region: true Champagne must come from the Champagne region of France and be produced using the traditional method (méthode champenoise).</p><p>Other sparkling wines, like Prosecco from Italy or Cava from Spain, use different grapes and production techniques. Prosecco is typically made with the Charmat method, which produces a lighter, fruitier style, while Cava uses the same traditional method as Champagne but with local Spanish grapes.</p><p>The taste profiles also vary: Champagne often features brioche and citrus notes, Prosecco bursts with green apple and pear, and Cava brings earthy, nutty undertones. Knowing these differences can elevate your next toast.</p>`,
    tags: ["champagne", "prosecco", "cava", "basics"],
    readTime: 3
  },
  {
    id: "2",
    title: "How Sparkling Wine Is Made: From Grape to Glass",
    coverImage: "/images/articles/a2.jpg",
    content: `<p>The magic of bubbles begins in the vineyard, but the real art is in the second fermentation. In the traditional method, still base wine is bottled with sugar and yeast, triggering a second fermentation that traps CO₂ inside the bottle.</p><p>The wine then ages on the yeast cells (lees) for months or years, developing complex toasty, creamy flavors. After riddling and disgorging, a small amount of sugar and wine (dosage) is added to balance acidity.</p><p>The Charmat method, used for Prosecco, conducts the second fermentation in large pressurized tanks, preserving fresh fruity aromas. There's also the simple carbonation method, but it's rarely used for quality bubbly.</p>`,
    tags: ["production", "traditional method", "charmat"],
    readTime: 4
  },
  {
    id: "3",
    title: "The Best Glassware for Sparkling Wine",
    coverImage: "/images/articles/a3.jpg",
    content: `<p>Forget the wide, shallow coupe—if you want to truly enjoy the aroma and bubbles of your sparkling wine, reach for a flute or a tulip glass. The narrow shape of the flute preserves carbonation and directs the bead of bubbles upward in an elegant stream.</p><p>However, many sommeliers now advocate for the tulip-shaped glass, which is slightly wider at the bottom and tapers at the top. This shape allows the wine's aromas to gather while still maintaining effervescence. White wine glasses can even be used for older vintage Champagnes to reveal their complexity.</p><p>So, next time you pour, choose a glass that enhances both the visual spectacle and the aromatic experience.</p>`,
    tags: ["glassware", "serving", "tips"],
    readTime: 2
  },
  {
    id: "4",
    title: "Prosecco 101: Italy's Beloved Bubbly",
    coverImage: "/images/articles/a4.jpg",
    content: `<p>Prosecco is the friendly, easy-going sparkling wine from northeastern Italy, primarily made from the Glera grape. It's known for its fresh, fruity flavors of green apple, pear, and white peach, with a light, frothy mousse.</p><p>Most Prosecco is produced in the Charmat method, which captures the grape's natural aromatics without the yeasty complexity of Champagne. The result is a vibrant, approachable wine perfect for brunch, aperitivo, or casual celebrations.</p><p>Look for Prosecco Superiore DOCG from the hills of Conegliano Valdobbiadene for a step up in quality, with more pronounced minerality and finesse.</p>`,
    tags: ["prosecco", "italy", "regions"],
    readTime: 3
  },
  {
    id: "5",
    title: "Cava: Spain's Sparkling Treasure",
    coverImage: "/images/articles/a5.jpg",
    content: `<p>Cava is Spain's answer to Champagne, made in the same traditional method but using indigenous grape varieties like Macabeo, Xarel·lo, and Parellada. The heart of Cava production is in Catalonia, particularly in the Penedès region.</p><p>What sets Cava apart is its remarkable value—many reserve and gran reserva Cavas offer autolytic complexity (bready, nutty notes) at a fraction of the price of Champagne. The aging categories are clearly defined: Cava (min 9 months), Reserva (15 months), and Gran Reserva (30 months).</p><p>Try a Cava with grilled seafood or tapas for a perfect pairing that brings a taste of the Mediterranean to your table.</p>`,
    tags: ["cava", "spain", "value"],
    readTime: 3
  },
  {
    id: "6",
    title: "The Dos and Don'ts of Opening a Bottle of Bubbly",
    coverImage: "/images/articles/a6.jpg",
    content: `<p>Opening a bottle of sparkling wine can be dramatic, but safety and style matter. Follow these steps: Chill the bottle well (45–48°F). Remove the foil and loosen the wire cage while keeping your thumb on the cork. Hold the bottle at a 45-degree angle, grip the cork, and twist the bottle—not the cork.</p><p>The goal is a gentle sigh, not a loud pop. A loud pop releases bubbles and can be dangerous. Keep the bottle pointed away from people and valuables.</p><p>If the cork is stubborn, a towel can help with grip. And never use a corkscrew on a sparkling wine bottle—that's a disaster waiting to happen.</p>`,
    tags: ["serving", "safety", "tips"],
    readTime: 2
  },
  {
    id: "7",
    title: "Sparkling Rosé: The Pink Drink That's Stealing the Spotlight",
    coverImage: "/images/articles/a7.jpg",
    content: `<p>Sparkling rosé combines the festive fizz of sparkling wine with the alluring color and berry flavors of rosé. It can be made in two ways: by blending a small amount of red wine into a white base (common in Champagne) or by allowing brief skin contact with red grapes (common in many New World sparklers).</p><p>The result is a wine with notes of strawberry, raspberry, and sometimes a hint of rose petal, along with a crisp, refreshing finish. It's incredibly versatile with food—try it with grilled salmon, charcuterie, or even chocolate-covered strawberries.</p><p>From French Champagne Rosé to Italian Rosé Prosecco and Californian sparkling rosé, there's a pink bubble for every palate.</p>`,
    tags: ["rosé", "styles", "food pairing"],
    readTime: 3
  },
  {
    id: "8",
    title: "Food Pairing with Sparkling Wine: Beyond Oysters",
    coverImage: "/images/articles/a8.jpg",
    content: `<p>Sparkling wine is one of the most food-friendly beverages thanks to its high acidity and effervescence. While oysters and caviar are classic, there's a world of possibilities: fried chicken and Champagne is a beloved pairing (the bubbles cut through the fat), and sushi loves the crispness of a Brut.</p><p>For spicy dishes like Thai curry, an off-dry Prosecco or demi-sec sparkling can cool the heat. Aged Cava with its nutty notes pairs wonderfully with mushroom dishes and aged cheeses. And don't forget dessert—a slightly sweet Moscato d'Asti or sparkling rosé is delightful with fruit tarts.</p><p>Experiment: the bubbles cleanse your palate, making every bite as exciting as the first.</p>`,
    tags: ["food pairing", "pairings", "ideas"],
    readTime: 4
  },
  {
    id: "9",
    title: "The Rise of Pét-Nat: Natural Bubbles",
    coverImage: "/images/articles/a9.jpg",
    content: `<p>Pétillant naturel, or Pét-Nat, is the oldest way of making sparkling wine—and it's making a huge comeback. Unlike other methods, Pét-Nat is bottled before the first fermentation is complete, trapping the remaining sugars and producing gentle, natural bubbles.</p><p>This hands-off approach results in wines that are often cloudy, a bit funky, and full of character. They're bottled without dosage, so they're usually bone-dry or just slightly off-dry. Expect flavors of fresh orchard fruit, wildflowers, and sometimes a touch of yeasty bread.</p><p>Pét-Nat is the choice for natural wine lovers and those seeking something unfussy, vibrant, and utterly refreshing.</p>`,
    tags: ["pét-nat", "natural wine", "trends"],
    readTime: 3
  },
  {
    id: "10",
    title: "How to Store and Serve Sparkling Wine Like a Pro",
    coverImage: "/images/articles/a10.jpg",
    content: `<p>Proper storage keeps your bubbles vibrant. Store bottles horizontally in a cool, dark place with a constant temperature (around 50–55°F). Avoid temperature fluctuations and vibrations, which can degrade the wine.</p><p>For serving, chill the bottle to 45–48°F—an ice bucket with water and ice works faster than the fridge. Pour slowly into a tilted glass to preserve the bubbles. And if you don't finish the bottle, a sparkling wine stopper can maintain the pressure for another day or two.</p><p>Remember, vintage Champagnes can age for decades, but most non-vintage sparkling wines should be enjoyed within 2–3 years of release for optimal freshness.</p>`,
    tags: ["storage", "serving", "tips"],
    readTime: 3
  }
];
