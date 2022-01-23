import React from 'react';
import { AccountPage, Card, CardDenuncia } from '../styles/styles';
import logo from '../assets/perfil.jpg';
import { PostContext } from '../context/PostContext';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';

const Account = () => {
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
          <h2>Antonio Sitoe</h2>
          <h5>@antonio sitoe</h5>
          <p>Sou um jovem estudante, a procura de oportunidades</p>
        </div>

        <ul className='lista'>
          <li>
            <button onClick={onToogle}>Publicacoes</button>
          </li>
          <li>
            <button onClick={onToogle}>Denuncias</button>
          </li>
        </ul>

        <section>
          {toogle ? (
            <CardDenuncia>
              <h4>Assunto: Violacao aos direitos humanos</h4>
              <h4>Estado: Pendente</h4>
              <span>Enviado a 1 semana</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                ratione harum rem velit vitae voluptatem, doloremque libero iure
                eum vero enim eligendi earum odit quia repellat ab aut natus
                architecto?
              </p>

              <div>
                <button>Editar</button>
              </div>
            </CardDenuncia>
          ) : (
            <>
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
            </>
          )}
        </section>
      </div>
    </AccountPage>
  );
};

export default Account;
