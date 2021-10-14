import React, { useState } from 'react';
import './PessoaInfo.css';

function PessoaInfoFuncional(props) {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState(props.pessoa.nome);

  const subtrai = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  const soma = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  }

  return (
    <div className="PessoaInfo">
      <div className="card">
        <img src="https://via.placeholder.com/200x200?text=Imagem" className="card-img-top" alt="..." />
        <div className="card-body">
          <input type="text" value={nome} onChange={(ev) => setNome(ev.target.value)} />
          <h5 className="card-title">{nome}</h5>
          <p className="card-text">{props.pessoa.perfil}</p>
          <a href={props.link} className="btn btn-primary">Go somewhere</a>
          <button onClick={subtrai}>-</button> {contador} <button onClick={soma}>+</button>
        </div>
      </div>
    </div>
  );
}

export default PessoaInfoFuncional;