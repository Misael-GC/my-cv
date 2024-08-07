import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home/index';
import AboutMe from '../AboutMe/index';
import WhatDo from '../WhatDo/index';
import Portfolio from '../Portfolio/index';
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import PDF from '../PDF/index';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/about-me', element: <AboutMe />},
    { path: '/portfolio', element: <Portfolio />},
    { path: '/what-do', element: <WhatDo />},
    { path: '/pdf', element: <PDF />},
    { path: '*', element: <NotFound />}
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
