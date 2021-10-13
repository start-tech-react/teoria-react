import './ListaPessoas.css';
import PessoaInfo from './PessoaInfo';

function ListaPessoas(props) {
  console.log(props);
  return (
    <div className="ListaPessoas">
      {props.pessoas.map(pessoa => <PessoaInfo link={pessoa.link} pessoa={pessoa} key={pessoa.id} />)}
    </div>
  );
}

export default ListaPessoas;
