import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import "../style/Header.css";

function Header()
{
    return (
        <header className="header-wrapper">
            <img src={logo} className="logo" alt="logo" />
            <div className='header-nav'>
                <Link to="/"><h3 className='nav-item'>Accueil</h3></Link>
                <Link to="/"><h3 className='nav-item'>A propos</h3></Link>
            </div>
        </header>
    )
}

export default Header;