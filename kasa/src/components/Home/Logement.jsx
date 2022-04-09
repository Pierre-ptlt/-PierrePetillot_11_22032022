import "../../style/home/LogementsList.css";

function Logement(props) {
	return (
		<div className="logement-item">
			<img className="logement-image" src={props.cover} alt={props.title} />
			<p className="logement-title">{props.title}</p>
		</div>
	);
}

export default Logement;
