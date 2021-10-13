import React from 'react';
import './PessoaInfo.css';

class PessoaInfo extends React.Component {
  render() {
    return (
      <div className="PessoaInfo">
        <div className="card">
          <img src="https://via.placeholder.com/200x200?text=Imagem" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.pessoa.nome}</h5>
            <p className="card-text">{this.props.pessoa.perfil}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PessoaInfo;