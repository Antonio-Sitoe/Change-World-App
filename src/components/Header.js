import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles/styles';
import Logo from '../assets/logo.png';

const Header = () => {
  const nav = React.useRef();
  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }
  return (
    <HeaderStyle>
      <div>
        <Link id='logo' to=''>
          <img src={Logo} alt='' />
        </Link>
        <nav id='nav' ref={nav}>
          <button
            onClick={toggleMenu}
            aria-label='Abrir Menu'
            id='btn-mobile'
            aria-haspopup='true'
            aria-controls='menu'
            aria-expanded='false'
          >
            Menu
            <span id='hamburger'></span>
          </button>
          <ul id='menu' role='menu'>
            <li>
              <Link to=''>Minhas Denuncias</Link>
            </li>
            <li>
              <Link to=''>Sobre</Link>
            </li>
            <li>
              <Link to=''>Contato</Link>
            </li>
            <li>
              <Link to=''>Perfil</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
