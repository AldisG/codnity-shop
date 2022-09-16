import './App.scss';
import LOGO from './img/react.png';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import StorePage from './pages/StorePage';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import NavigationBar from './components/navigation/NavigationBar';
import NavigationModal from './components/navigation/NavigationModal';

const test = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  // const { data, error, isLoading, isError } = useGetAnyDataQuery(undefined);
  const app = 'app';

  return (
    <motion.div
      variants={test}
      initial={test.start}
      animate={test.end}
      transition={{ duration: 1 }}
      className="App"
    >
      <NavigationBar />
      {/* {openModal && <NavigationModal />} */}
      <NavigationModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </motion.div>
  );
};

export default App;
