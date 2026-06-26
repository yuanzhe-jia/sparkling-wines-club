import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BubbleBackground from './components/BubbleBackground';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import Menu from './pages/Menu';
import WineDetail from './pages/WineDetail';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <BubbleBackground />
      <Navbar />
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge/:id" element={<ArticleDetail />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<WineDetail />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
