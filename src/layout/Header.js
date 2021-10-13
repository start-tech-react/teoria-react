import logo from '../assets/ambev-tech-logo.svg';
import './Header.css';

function Header(props) {
    return (
        <header className="App-header">
            <img src={logo} alt={props.info.altText} />
        </header>
    );
}

export default Header;