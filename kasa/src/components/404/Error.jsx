import { Link } from "react-router-dom";
import "../../style/utils/Error.css";

function Error() {
	return (
		<div className="error-wrapper">
			<h1 className="error-title">404</h1>
			<h2 className="error-text">
				Oups ! La page que vous demandez n'existe pas.
			</h2>
			<Link to="/" className="error-link">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}

export default Error;
