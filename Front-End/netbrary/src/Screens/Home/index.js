import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Tela Principal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/logon">Logon</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;