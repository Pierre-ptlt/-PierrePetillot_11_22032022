import logements from "../../data/logements.json";
import Logement from "./Logement";
import "../../style/home/LogementsList.css";
import { Link } from "react-router-dom";

function LogementsList() {
	return (
		<div className="logements-list-wrapper">
			{logements.map((logement) => (
				<Link
					key={logement.id}
					className="logement-item"
					to={`/logement/${logement.id}`}
				>
					<Logement key={logement.id} {...logement} />
				</Link>
			))}
		</div>
	);
}

export default LogementsList;
