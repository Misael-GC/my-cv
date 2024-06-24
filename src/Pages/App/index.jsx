
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/index'
import AboutMe from '../AboutMe/index'
import WhatDo from '../WhatDo/index'
import Portfolio from '../Portfolio/index'
import NotFound from '../NotFound'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/about-me', element: <AboutMe />},
    { path: '/portfolio', element: <Portfolio />},
    { path: '/what-do', element: <WhatDo />},
    { path: '*', element: <NotFound />}

  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
