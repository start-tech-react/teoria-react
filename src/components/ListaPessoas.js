import './ListaPessoas.css';
import PessoaInfo from './PessoaInfo';
import PessoaInfoFuncional from './PessoaInfoFuncional';

function ListaPessoas(props) {
  console.log(props);
  return (
    <div className="ListaPessoas">
      {props.pessoas.map(pessoa => <PessoaInfoFuncional link={pessoa.link} pessoa={pessoa} key={pessoa.id} />)}
    </div>
  );
}

export default ListaPessoas;
