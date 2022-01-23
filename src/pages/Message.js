import React from 'react';
import { List, StyleMessage, MessageBox } from '../styles/MessageStyle';
import logo from '../assets/perfil.jpg';
import Tifo from '../assets/tifo.jpg';
import { AiOutlineSend } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';

const Message = () => {
  const [ative, setAtive] = React.useState(false);
  return (
    <StyleMessage>
      <List className={ative && 'ative'}>
        <li onClick={() => setAtive(true)}>
          <img src={logo} alt='' />
          <p>Antonio Sitoe</p>
        </li>
        <li onClick={() => setAtive(true)}>
          <img src={Tifo} alt='' />
          <p>Maria Sitoe</p>
        </li>
        <li onClick={() => setAtive(true)}>
          <img src={logo} alt='' />
          <p>Sonia Sitoe</p>
        </li>
        <li onClick={() => setAtive(true)}>
          <img src={Tifo} alt='' />
          <p>Marta Sitoe</p>
        </li>
      </List>
      <MessageBox className={ative && 'ative'}>
        <button className='back' onClick={() => setAtive(false)}>
          <IoMdArrowBack /> Voltar
        </button>
        <li>
          <div className='flex'>
            <img src={logo} alt='' />
            <div>
              <p className='nome'>Antonio Sitoe</p>
              <p>Ola como estas ?</p>
            </div>
          </div>
        </li>
        <li>
          <div className='flex'>
            <img src={Tifo} alt='' />
            <div>
              <p className='nome'>Maria Manuela</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem pariatur maxime repudiandae, s
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className='flex'>
            <img src={logo} alt='' />
            <div>
              <p className='nome'>Antonio Sitoe</p>
              <p>Novidades?</p>
            </div>
          </div>
        </li>
        <div className='send'>
          <input
            type='text'
            placeholder='Escreva qualquer coisa'
            name=''
            id=''
          />
          <button>
            <AiOutlineSend />
          </button>
        </div>
      </MessageBox>
    </StyleMessage>
  );
};

export default Message;
