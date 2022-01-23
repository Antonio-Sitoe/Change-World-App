import React from 'react';
import { PostContext } from '../context/PostContext';
import { Publicastyle } from '../styles/styles';

const Publica = () => {
  const { Notifica } = React.useContext(PostContext);
  console.log(Notifica);
  return (
    <Publicastyle>
      <h3>Notificações</h3>
      <p className='p'>Você tem novas notificações</p>
      <section>
        {Notifica.map(({ foto, nome, descricao }, i) => {
          return (
            <div className='notificacao' key={i}>
              <img src={foto} alt='' />
              <p>
                <strong>{nome}</strong> {descricao}
              </p>
            </div>
          );
        })}
      </section>
    </Publicastyle>
  );
};

export default Publica;
