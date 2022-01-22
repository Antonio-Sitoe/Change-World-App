import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header.js';
import { HomePage } from '../styles/styles';
import Perfil from '../assets/perfil.jpg';
import { PostContext } from '../context/PostContext';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { FaHandsHelping, FaMoneyBillWaveAlt } from 'react-icons/fa';
import { GiTalk } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';

export function HomeDefault() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export function Home() {
  const { post } = React.useContext(PostContext);
  const [title, setTitle] = React.useState('');
  const [modal, setModal] = React.useState(false);

  function openModal(e) {
    e.preventDefault();
    setTitle(e.target.innerText);
    setModal(!modal);
  }
  return (
    <HomePage>
      <div className='container'>
        <aside>
          <img src={Perfil} alt='logo' />
          <h3>Antonio Sitoe</h3>
          <p>Sou um jovem estudante, a procura de oportunidades</p>
        </aside>

        <main>
          <div className='makePost'>
            <h1>Em que podemos ajudar voce hoje ?</h1>
            <input type='text' placeholder='Pesquise por qualquer coisa...' />
            <ul>
              <li>
                <a href='' onClick={openModal}>
                  <BsFillTelephoneFill />
                  Denuncias.
                </a>{' '}
              </li>
              <li>
                <a href='' onClick={openModal}>
                  {' '}
                  <FaHandsHelping /> Pedir Ajuda.
                </a>{' '}
              </li>
              <li>
                <a href='' onClick={openModal}>
                  <FaMoneyBillWaveAlt /> Pedir Financiador.
                </a>
              </li>
              <li>
                <a href='' onClick={openModal}>
                  <GiTalk /> Publicar ideias.
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <section>
            {post.map((item, i) => {
              return (
                <div className='post' key={i}>
                  <div className='header'>
                    <img src={item.user.foto} alt='perfil' />
                    <div>
                      <h3>{item.user.nome}</h3>
                      <p>{item.user.sobre}</p>
                    </div>
                  </div>
                  <div className='sobre'>
                    {item.post.sobre.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                  <div className='foto'>400 x 600</div>
                  <div>
                    <div className='comentarios'>
                      <button>
                        <AiOutlineLike />
                        Gostos
                      </button>
                      <button>
                        <AiOutlineMessage />
                        Comentar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
          <button className='btnResultado'>Exibir mais resultados</button>
        </main>

        <footer>
          <h2>Filtro</h2>
          <ul>
            <li>
              <label htmlFor=''>
                <input type='checkbox' name='' id='' />
                Denuncias.
              </label>
            </li>
            <li>
              <label htmlFor=''>
                <input type='checkbox' name='' id='' />
                Pedir Ajuda.
              </label>
            </li>
            <li>
              <label htmlFor=''>
                <input type='checkbox' name='' id='' />
                Pedir Financiador.
              </label>
            </li>
            <li>
              <label htmlFor=''>
                <input type='checkbox' name='' id='' />
                Publicar ideias
              </label>
            </li>
          </ul>
        </footer>
      </div>

      {modal && (
        <div className='modalbg'>
          <div className='modal'>
            <h1>{title}</h1>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder={'No que voce esta pensando?'}
            />
            <input type='file' name='' id='' />
            <button onClick={() => setModal(false)}>Publicar</button>
          </div>
        </div>
      )}
    </HomePage>
  );
}
