import logo from "../assets/images/logo-footer.png";
import "../style/Footer.css";

function Footer() {
	return (
		<div className="footer-wrapper">
			<img className="footer-logo" src={logo} alt="logo" />
			<p className="footer-text">© 2020 Kasa. All rights reserved</p>
		</div>
	);
}

export default Footer;
