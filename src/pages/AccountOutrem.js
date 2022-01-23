import React from 'react';
import { AccountPage, Card } from '../styles/styles';
import logo from '../assets/perfil.jpg';
import { PostContext } from '../context/PostContext';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AccountOutrem = () => {
  const { post } = React.useContext(PostContext);
  const [toogle, setToogle] = React.useState(false);

  function onToogle() {
    setToogle(!toogle);
  }
  return (
    <AccountPage>
      <div>
        <div className='foto'>
          <img src={logo} alt='' />
        </div>
        <div className='sobres'>
          <h2>Maria paula </h2>
          <h5>@maria58</h5>
          <p>Mulher a procura de oportunidades</p>
        </div>

        <ul className='lista'>
          <li>
            <button onClick={onToogle}>Publicacoes</button>
          </li>
          <li>
            <Link to=''>Entrar em contacto</Link>
          </li>
        </ul>

        <section>
          {post.map((item, i) => {
            if (i >= 3)
              return (
                <Card key={i}>
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
                  <img src={item.post.foto} className='pick' alt='' />
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
            return null;
          })}
        </section>
      </div>
    </AccountPage>
  );
};

export default AccountOutrem;
