import './ListaPessoas.css';
import PessoaInfo from './PessoaInfo';

function ListaPessoas(props) {
  return (
    <div className="ListaPessoas">
      <h1>Listagem de pessoas</h1>
      {
        props.pessoas.map(pessoa => <PessoaInfo nome={pessoa.nome} key={pessoa.id} />)
      }
      <header>Teste</header>
    </div>
  );
}

export default ListaPessoas;
