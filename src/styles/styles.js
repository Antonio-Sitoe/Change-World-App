import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 90%;
}
   * {
     box-sizing: border-box;
     margin: 0;
     font-family: 'Roboto', sans-serif;
     padding: 0;
   }

   ul {
     list-style: none;
   }
   h1, h2, h3, h4 {
     color: #252525;
   }
   a {
     text-decoration: none;
   }
   p {
     font-size: 1rem;
      color: #252525;
   }
   img {
     display: block;
     width: 100%;
   }
`;
export const HeaderStyle = styled.header`
  box-sizing: border-box;
  height: 70px;
  padding: 1rem;

  background: white;
  width: 100%;
  border-bottom: 1px solid #e4e3e3;
  position: fixed;
  top: 0;
  z-index: 10;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    a {
      img {
        max-width: 6rem;
      }
    }

    #menu {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 0.5rem;
    }

    #menu a {
      color: #252525;
      border-radius: 2px;

      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        fill: #fba82f;
      }

      &:hover {
        background: #f8f8f8;
      }
    }

    #btn-mobile {
      display: none;
    }

    @media (max-width: 600px) {
      #menu {
        display: block;
        position: absolute;
        width: 100%;
        top: 70px;
        right: 0px;
        background: #e7e7e7;
        transition: 0.6s;
        z-index: 1000;
        height: 0px;
        visibility: hidden;
        overflow-y: hidden;
      }
      #nav.active #menu {
        height: calc(100vh - 70px);
        visibility: visible;
        overflow-y: auto;
      }
      #menu a {
        padding: 1rem 0;
        margin: 0 1rem;
        border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      }
      #btn-mobile {
        display: flex;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
        gap: 0.5rem;
      }
      #hamburger {
        border-top: 2px solid;
        width: 20px;
      }
      #hamburger::after,
      #hamburger::before {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background: currentColor;
        margin-top: 5px;
        transition: 0.3s;
        position: relative;
      }
      #nav.active #hamburger {
        border-top-color: transparent;
      }
      #nav.active #hamburger::before {
        transform: rotate(135deg);
      }
      #nav.active #hamburger::after {
        transform: rotate(-135deg);
        top: -7px;
      }
    }
  }
`;
export const HomePage = styled.main`
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
  padding-top: 1rem;

  .container {
    max-width: 1100px;
    margin: 5rem auto;
    padding: 0 0.6rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    aside {
      border: 1px solid whitesmoke;
      flex: 0 1 15rem;
      display: grid;
      gap: 1rem;
      text-align: center;
      border-radius: 2px;
      background: white;
      padding: 2rem;

      img {
        max-width: 5rem;
        margin: 0 auto;
        border-radius: 50%;
      }
    }

    main {
      flex: 1;
      .makePost {
        border: 1px solid whitesmoke;
        display: grid;
        gap: 1rem;
        background: white;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 2px;

        h1 {
          margin-bottom: 1rem;
        }

        input {
          padding: 1rem;
          border: 1px solid #dbd9d9;
          border-radius: 2px;
          background: #fefefe;
        }

        ul {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

          li {
            a {
              color: #252525;
              font-weight: bold;
              gap: 0.6rem;
              display: flex;
              align-items: center;
              flex-direction: column;
              text-align: center;

              cursor: pointer;
              padding: 0.3rem 0;

              svg {
                fill: #fba82f;
                width: 30px;
                height: 30px;
              }

              &:hover {
                background: whitesmoke;
              }
            }
          }
        }
      }
      section {
        margin-top: 1rem;
        display: grid;
        gap: 1rem;
      }
    }

    footer {
      background: white;
      padding: 1rem;
      border-radius: 2px;
      flex: 0 1 15rem;
      ul {
        margin: 1rem;
        display: grid;
        gap: 1rem;

        li {
          label {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
        }
      }

      .enfate {
        li {
          a {
            color: #c27c14;
            text-decoration: underline;
          }
          display: flex;
          align-items: center;

          &::before {
            content: '';
            width: 6px;
            height: 6px;
            background: #fba82f;
            margin-right: 0.4rem;
            border-radius: 50%;
          }
        }
      }
    }

    .btnResultado {
      padding: 1rem;
      width: 100%;
      margin: 2rem auto;
      background: #fba82f;
      color: #fefefe;
      border: none;
      border-radius: 2px;
      cursor: pointer;
    }

    @media (max-width: 900px) {
      flex-wrap: wrap;
      footer {
        flex: 0 1 100%;
      }
    }
    @media (max-width: 555px) {
      flex-wrap: wrap;
      aside {
        flex: 0 1 100%;
      }
    }
  }

  .modalbg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;

    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    .modal {
      margin: 0.6rem;
      display: grid;
      padding: 3rem;
      border-radius: 2px;
      max-width: 600px;
      width: 100%;
      background: white;
      gap: 1rem;
      textarea {
        padding: 1rem;
        border: 1px solid whitesmoke;
      }

      button {
        padding: 1rem;
        cursor: pointer;
        border: none;
        color: white;
        background: #fba82f;
      }
    }
  }
`;
export const LoginPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  section {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 10px 30px rgba(0, 0, 0, 0.12);
    max-width: 500px;
    width: 100%;
    display: grid;
    gap: 1rem;
    padding: 2rem;
    border: 1px solid whitesmoke;

    p {
      font-size: 0.9rem;
    }
    img {
      max-width: 15rem;
      margin: 0 auto;
    }
    input,
    a {
      padding: 0.8rem 1rem;
      border-radius: 2px;
      border: 1px solid whitesmoke;
    }
    a {
      background-color: #fba82f;
      border: none;
      color: whitesmoke;
      cursor: pointer;
      text-align: center;
    }
    @media (max-width: 500px) {
      box-shadow: none;
    }
  }
`;
const animeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to { opacity: 1;
    transform: translateX(0);

  }

`;
export const AccountPage = styled.main`
  max-width: 800px;
  margin: 5rem auto;
  /* background: whitesmoke; */

  .foto {
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    border-radius: 2px;
    position: relative;
    height: 15rem;
    margin-bottom: 7rem;

    img {
      max-width: 15rem;
      position: absolute;
      bottom: -5rem;
      left: 5rem;
      border: 3px solid white;
      border-radius: 50%;

      @media (max-width: 350px) {
        left: 0;
        bottom: -2rem;
        position: initial;
        margin: 0 auto;
      }
    }
    @media (max-width: 350px) {
      margin-bottom: 4rem;
    }
  }
  .sobres {
    text-align: center;
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .lista {
    border: 4px solid whitesmoke;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: center;
    align-content: space-between;

    li {
      button {
        width: 100%;
        padding: 1rem;
        border: none;
        font-weight: bold;
        background: white;
        cursor: pointer;

        &:first-child {
          border-right: 4px solid whitesmoke;
        }
      }

      a {
        width: 100%;
        color: white;
        padding: 1rem;
        background: #fba82f;
      }
    }
  }
  section {
    display: grid;
    gap: 1rem;
    margin: 2rem auto;
    padding-bottom: 3rem;
  }
`;
export const Card = styled.div`
  border: 1px solid whitesmoke;
  animation: ${animeLeft} 0.3s;
  background: white;
  padding: 1rem;
  border-radius: 2px;
  display: grid;
  gap: 1rem;

  .header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    img {
      max-width: 4rem;
      border-radius: 50%;
    }
  }
  .sobre {
    p {
      margin: 0.6rem 0;
      line-height: 1.5;
    }
  }

  .foto {
    width: 100%;
    height: 300px;
  }
  .comentarios {
    border-top: 1px solid #e4e0e0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      margin-top: 1rem;
      background: white;
      cursor: pointer;
      border: none;
      padding: 1rem;

      svg {
        width: 30px;
        height: 30px;
      }

      &:hover {
        background: whitesmoke;
      }
    }
  }
`;

export const Publicastyle = styled.main`
  max-width: 600px;
  margin: 7rem auto;
  padding: 1rem;

  .p {
    margin: 1rem 0;
  }

  section {
    display: grid;
    gap: 1rem;
    margin: 2rem 0;

    padding-bottom: 3rem;
    padding: 1rem;
    border: 1px solid whitesmoke;

    .notificacao {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 2px;

      img {
        max-width: 4rem;
        border-radius: 50%;
      }
      border-bottom: 1px solid whitesmoke;
      &:hover {
        background: whitesmoke;
      }
    }
  }
`;

export const CardDenuncia = styled.div`
  background: white;
  padding: 1rem;
  display: grid;
  gap: 0.6rem;
  border: 1px solid whitesmoke;
  animation: ${animeLeft} 0.3s;

  span {
    font-size: 0.8rem;
    color: grey;
  }

  button {
    padding: 0.6rem;
    background: #fba82f;
    border: none;
    color: whitesmoke;
    max-width: 6rem;
    width: 100%;
    border-radius: 2px;
  }
`;
