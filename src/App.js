import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import Login from './pages/Login';
import { PostStorage } from './context/PostContext';
import { HomeDefault, Home } from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <PostStorage>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='App' element={<HomeDefault />}>
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </PostStorage>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
