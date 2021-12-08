import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Actor from './components/Actor';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyles';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/:actorId' element={<Actor />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );

export default App;
