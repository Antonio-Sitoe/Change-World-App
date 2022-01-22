import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { LoginPage } from '../styles/styles';

const Login = () => {
  return (
    <LoginPage>
      <section>
        <img src={Logo} alt='logo' />
        <h2>Entrar</h2>
        <input type='text' placeholder='Digite o email' />
        <input type='password' placeholder='Digite a senha' />
        <p>Esqueceu a senha?</p>
        <Link to='App'>Entrar</Link>
      </section>
    </LoginPage>
  );
};

export default Login;
