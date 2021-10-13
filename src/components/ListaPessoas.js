import './ListaPessoas.css';
import PessoaInfo from './PessoaInfo';

function ListaPessoas(props) {
  console.log(props);
  return (
    <div className="ListaPessoas">
      {props.pessoas.map(pessoa => <PessoaInfo pessoa={pessoa} key={pessoa.div} />)}
    </div>
  );
}

export default ListaPessoas;
