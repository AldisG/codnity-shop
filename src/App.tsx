import './App.scss';
import LOGO from './img/react.png';
import { Routes, Route } from 'react-router-dom';
// import { useGetAnyDataQuery } from './store/services/storeApiCalls';
import { motion } from 'framer-motion';

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
      onClick={() => console.log('!')}
      className="App"
    >
      <h1>{app}</h1>
      <p>Working with: {process.env.NODE_ENV} webpack</p>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <hr />
              <h3>This is displayed as a Route</h3>
              <img className="logo" src={LOGO} alt={LOGO} width={200} />
              <hr />
              <ul>
                <b>I contain :</b>
                <li>React</li>
                <li>TS</li>
                <li>ReduxToolkit</li>
                <li>React Testing Library and Jest</li>
                <li>CreateApi</li>
                <li>Framer Motion</li>
                <li>ESLint</li>
                <li>Prittier</li>
                <li>Webpack</li>
              </ul>
              <hr />
            </>
          }
        />
      </Routes>
    </motion.div>
  );
};

export default App;
