import styled from 'styled-components';
import { animeLeft } from './styles';

export const StyleMessage = styled.main`
  max-width: 1100px;
  margin: 6rem auto;
  padding: 1rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 10px 30px rgba(0, 0, 0, 0.12);
  display: grid;
  gap: 1rem;
  grid-template-columns: 30rem 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 20rem 1fr;
  }
  @media (max-width: 660px) {
    grid-template-columns: 1fr;
    box-shadow: none;
   
    margin: 4rem auto 0 auto;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 0.3rem;
  @media (max-width: 660px) {
    &.ative {
      display: none;
    }
  }
  li {
    padding: 1rem;
    cursor: pointer;
    display: flex;
    border: 2px solid #fba82f;
    align-items: flex-start;
    border-radius: 2px;

    p {
      font-weight: bold;
      margin-left: 1rem;
    }

    img {
      max-width: 5rem;
      border-radius: 50%;
    }
    &:first-child {
      background: #fba82f;
      p {
        color: whitesmoke;
      }
    }
    @media (max-width: 660px) {
      flex-direction: column;
      align-items: center;

      img {
        margin: 0 auto;
      }
      p {
        margin: 0.6rem auto;
        justify-content: center;
      }
    }
  }
`;

export const MessageBox = styled.ul`
  border: 2px solid #fba82f;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  .back {
    display: none;
  }
  @media (max-width: 660px) {
     height: 90vh;
    border: none;
    .back {
      display: block;
      padding: 0.6rem;
      background: none;
      text-align: left;
      border: none;
    }
    display: none;
    &.ative {
      display: flex;
      animation: ${animeLeft} 0.3s;
    }
  }

  li {
    .flex {
      background: whitesmoke;
      padding: 1rem;
      display: flex;
      gap: 1rem;
      img {
        max-width: 3rem;
        border-radius: 50%;
      }
      div {
        display: grid;
        gap: 0.1rem;
        .nome {
          font-weight: bold;
        }
      }
    }
  }
  position: relative;

  .send {
    position: absolute;
    bottom: 1rem;
    left: 0;
    display: grid;
    grid-template-columns: 1fr 5rem;
    gap: 0.6rem;

    width: 100%;
    margin: 0 auto;
    padding: 0 0.6rem;

    input {
      padding: 0.6rem 1rem;
      border-radius: 50px;
      border: 2px solid #fba82f;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      svg {
        fill: #fba82f;
        width: 40px;
        height: 40px;
      }
    }
  }
`;
