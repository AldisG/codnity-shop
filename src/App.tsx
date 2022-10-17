import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import StorePage from './pages/StorePage';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import NavigationBar from './components/navigation/NavigationBar';

import { useEffect } from 'react';
import { initiateStoreCall } from './store/slices/executeStoreCallsSlice';
import { useAppDispatch, useAppSelector } from './store/redux/hooks';
import { useGetStoreItemsQuery } from './store/services/storeApiCalls';

const test = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  // init store items this way, since useQuery cant be used in useEffect
  // const dispatch = useAppDispatch();
  // const fetcher = () => {
  //   const { data, error, isLoading, isError, isFetching, isSuccess } =
  //     useGetStoreItemsQuery('');
  //   console.log(data);
  // };
  // fetcher();

  return (
    <motion.div
      variants={test}
      initial={test.start}
      animate={test.end}
      transition={{ duration: 1 }}
      className="App"
    >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </motion.div>
  );
};

export default App;
