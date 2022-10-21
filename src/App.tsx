import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import StorePage from './pages/StorePage';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/footer/Footer';
import { Box } from '@mui/system';

const initialLoad = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  return (
    <motion.div
      variants={initialLoad}
      initial={initialLoad.start}
      animate={initialLoad.end}
      transition={{ duration: 1 }}
      className="App"
    >
      <NavigationBar />
      <Box sx={{ minHeight: '95vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
      <Footer />
    </motion.div>
  );
};

export default App;
