import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../style/Header.css";

function Header() {
	return (
		<header className="header-wrapper">
			<Link to="/">
				<img src={logo} className="logo" alt="logo" />
			</Link>
			<div className="header-nav">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active" : "inactive")}
				>
					<h3 className="nav-item">Accueil</h3>
				</NavLink>
				<NavLink
					to="about"
					className={({ isActive }) => (isActive ? "active" : "inactive")}
				>
					<h3 className="nav-item">A propos</h3>
				</NavLink>
			</div>
		</header>
	);
}

export default Header;
