import React from 'react';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { PostContext } from '../context/PostContext';
import { Card, Publicastyle } from '../styles/styles';

const Publica = () => {
  const { post } = React.useContext(PostContext);
  return (
    <Publicastyle>
      <h3>Notificacoes</h3>
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
          return null;
        })}
      </section>
    </Publicastyle>
  );
};

export default Publica;
