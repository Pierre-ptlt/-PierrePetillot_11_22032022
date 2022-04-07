import "../../style/home/LogementsList.css";

function Logement(props) {
	return (
		<div className="logement-item">
			<p className="logement-title">{props.title}</p>
		</div>
	);
}

export default Logement;
