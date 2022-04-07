import logements from "../../data/logements.json";
import Logement from "./Logement";
import "../../style/home/LogementsList.css";

function LogementsList() {
	return (
		<div className="logements-list-wrapper">
			{logements.map((logement) => (
				<Logement key={logement.id} {...logement} />
			))}
		</div>
	);
}

export default LogementsList;
