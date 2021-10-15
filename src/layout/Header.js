import logo from '../assets/ambev-tech-logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} alt={props.info.altText} />

      <button onClick={() => {
        console.log('clicou no botão');
        props.onChangeNightmode(!props.nightmode)
      }}>
        {props.nightmode ? "Desativar" : "Ativar"} modo noturno
      </button>
    </header>
  );
}

export default Header;