import './PessoaInfo.css';
import React from 'react';

class PessoaInfo extends React.Component {
  render() {
    return (
      <div className='PessoaInfo'>
        <div className="card">
          <img src="https://via.placeholder.com/200x200?text=Imagem" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.nome}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PessoaInfo;