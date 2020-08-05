import React from 'react';

import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/55624017?s=400&u=d01010820c549ef7618ff605888512538acbf4e0&v=4" alt="Rafael Eduardo Kepler"/>              
        <div>
          <strong>Rafael Eduardo Kepler</strong>
          <span>Xadrez</span>
        </div>
      </header>
      <p>
        Não ensino nada e cobro pra caramba, é isso.
      </p>          
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 1000,00</strong>                                          
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;