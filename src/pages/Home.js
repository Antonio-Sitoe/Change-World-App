import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header.js';
import { Card, HomePage } from '../styles/styles';
import Perfil from '../assets/perfil.jpg';
import { PostContext } from '../context/PostContext';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { FaHandsHelping, FaMoneyBillWaveAlt } from 'react-icons/fa';
import { GiTalk } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Modal from '../components/Modal.js';

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
    setTitle(e.currentTarget.innerText);
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
            <input type='text' placeholder='Pesquise por qualquer coisa...' />
            <ul>
              <li>
                <Link to='' onClick={openModal}>
                  <BsFillTelephoneFill />
                  Denuncias.
                </Link>{' '}
              </li>
              <li>
                <Link to='' onClick={openModal}>
                  {' '}
                  <FaHandsHelping /> Pedir Ajuda.
                </Link>{' '}
              </li>
              <li>
                <Link to='' onClick={openModal}>
                  <FaMoneyBillWaveAlt /> Pedir Financiador.
                </Link>
              </li>
              <li>
                <Link to='' onClick={openModal}>
                  <GiTalk /> Publicar ideias.
                </Link>
              </li>
            </ul>
          </div>
          <section>
            {post.map((item, i) => {
              return (
                <Card key={i}>
                  <Link to='outrem' className='header'>
                    <img src={item.user.foto} alt='perfil' />
                    <div>
                      <h3>{item.user.nome}</h3>
                      <p>{item.user.sobre}</p>
                    </div>
                  </Link>
                  <div className='sobre'>
                    {item.post.sobre.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                  <img src={item.post.foto} className='foto' alt='' />
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
                </Card>
              );
            })}
          </section>
          <button className='btnResultado'>Exibir mais resultados</button>
        </main>

        <footer>
          <h3>Filtro</h3>
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
          <h3>Sobre Academia</h3>
          <ul className='enfate'>
            <li>
              <Link to=''>Academia de pesquisa</Link>
            </li>
            <li>
              <Link to=''>Entre em Contato</Link>
            </li>
            <li>
              <Link to=''>Perguntas frequentes</Link>
            </li>
          </ul>
        </footer>
      </div>
      {modal && <Modal title={title} setModal={setModal} />}
    </HomePage>
  );
}
