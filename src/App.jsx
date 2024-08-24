import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/styles';
import Login from './pages/Login';
import { PostStorage } from './context/PostContext';
import { HomeDefault, Home } from './pages/Home';
import Account from './pages/Account';
import AccountOutrem from './pages/AccountOutrem';
import Publica from './pages/Publica';
import Message from './pages/Message';

const App = () => {
  return (
    <BrowserRouter>
      <PostStorage>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='App' element={<HomeDefault />}>
            <Route path='' element={<Home />} />
            <Route path='conta' element={<Account />} />
            <Route path='outrem' element={<AccountOutrem />} />
            <Route path='publica' element={<Publica />} />
            <Route path='message' element={<Message />} />
          </Route>
        </Routes>
      </PostStorage>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
