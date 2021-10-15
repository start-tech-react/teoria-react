import React from 'react';
import './PessoaInfo.css';

class PessoaInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.pessoa.nome,
      contador: 0
    };

    this.adiciona = this.adiciona.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentWillUpdate() {
    console.log('PessoaInfo atualizou...');
  }

  componentDidMount() {

    console.log('PessoaInfo apareceu...');
  }

  changeNome(novoValor) {
    this.setState(() => {
      return { nome: novoValor }
    });
  }

  adiciona() {
    this.setState((state) => {
      return { contador: state.contador + 1 };
    })
  }

  remove() {
    this.setState((state) => {
      if (state.contador > 0) {
        return { contador: state.contador - 1 };
      }
    })
  }

  render() {
    return (
      <div className="PessoaInfo">
        <div className="card">
          <img src="https://via.placeholder.com/200x200?text=Imagem" className="card-img-top" alt="..." />
          <div className="card-body">
            <input type="text" value={this.state.nome} onChange={(ev) => this.changeNome(ev.target.value)} />
            <h5 className="card-title">{this.state.nome}</h5>
            <p className="card-text">{this.props.pessoa.perfil}</p>
            <a href={this.props.link} className="btn btn-primary">Go somewhere</a>
            <button onClick={this.remove}>-</button> {this.state.contador} <button onClick={this.adiciona}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PessoaInfo;