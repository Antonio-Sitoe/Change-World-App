import React from 'react';
import { Cartes, Denu, Help, ModalStyle } from '../styles/MessageStyle';

const Modal = ({ title, setModal }) => {
  return (
    <ModalStyle>
      <div className='modal'>
        <span className='close' onClick={() => setModal(false)}>
          x
        </span>
        <Defaults title={title} />
      </div>
    </ModalStyle>
  );
};
export default Modal;

function Defaults({ title }) {
  console.log(title.includes('Denuncias'));
  if (title.includes('Denuncias')) return <Denuncias />;
  if (title.includes('Ajuda')) return <Ajuda />;
  if (title.includes('Financiador')) return <Financias />;
  if (title.includes('ideias')) return <Ideias />;
  return <Ideias />;
}

function Ajuda() {
  const [state, setState] = React.useState(false);
  return (
    <section>
      {state ? (
        <Denu>
          <h1>Descreve bem o que voce precisa</h1>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder={'No que voce esta pensando?'}
          />
          <button>Publicar</button>
        </Denu>
      ) : (
        <>
          <h1>Que tipo de ajuda voce quer?</h1>
          <Cartes>
            <li onClick={() => setState(true)}>Alimentacao</li>
            <li onClick={() => setState(true)}>Financiamento escolar</li>
            <li onClick={() => setState(true)}>Apoio a dificientes</li>
            <li onClick={() => setState(true)}>Outros</li>
          </Cartes>
        </>
      )}
    </section>
  );
}
function Financias() {
  const [state, setState] = React.useState(false);
  return (
    <div>
      {state ? (
        <Denu>
          <h1>Detalhes</h1>
          <p>Anexe o seu CV</p>
          <input type='file' name='' id='' />
          <p>Anexe o seu Plano de Atividade</p>
          <input type='file' name='' id='' />
          <p>Anexe o seu orcamento</p>
          <select name='' id=''>
            <option value=''>Orcamento para despesas com pessoal</option>
            <option value=''>Orcamento para bens</option>
            <option value=''>Orcamento para Servicos</option>
          </select>
          <p>Quanto tempo vai durar o projecto</p>
          <input type='number' name='' id='' />
          <textarea
            name=''
            id=''
            cols='10'
            rows='5'
            placeholder={'De mais detalhes do projeto'}
          />
          <button>Enviar para Academia</button>
        </Denu>
      ) : (
        <>
          <h1>Que tipo de negocio voce quer financiamento?</h1>
          <Cartes>
            <li onClick={() => setState(true)}>Agricultura</li>
            <li onClick={() => setState(true)}>Digital</li>
            <li onClick={() => setState(true)}>Vendas de produtos</li>
            <li onClick={() => setState(true)}>Outros</li>
          </Cartes>
        </>
      )}
    </div>
  );
}
function Ideias() {
  return (
    <Help>
      <h1>Nos queremos ajudar voce ?</h1>
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        placeholder={'No que voce esta pensando?'}
      />
      <input type='file' name='' id='' />
      <button>Publicar</button>
    </Help>
  );
}
function Denuncias() {
  const [state, setState] = React.useState(false);
  return (
    <div>
      {state ? (
        <Denu>
          <h1>Contenos como aconteceu</h1>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder={'No que voce esta pensando?'}
          />
          <button>Enviar para Academia</button>
        </Denu>
      ) : (
        <>
          <h1>Que tipo de denuncia voce gostaria de fazer ?</h1>
          <Cartes>
            <li onClick={() => setState(true)}>Abuso sexual</li>
            <li onClick={() => setState(true)}>Abuso de menores</li>
            <li onClick={() => setState(true)}>Violencia Domestica</li>
            <li onClick={() => setState(true)}>Maltratos</li>
          </Cartes>
        </>
      )}
    </div>
  );
}
