import "../../style/LogementPage/LogementPage.css";

function LogementTags({ tags }) {
	return (
		<div className="logement-tags-wrapper">
			{tags.map((tag) => (
				<span key={tag} className="logement-tag">
					{tag}
				</span>
			))}
		</div>
	);
}

export default LogementTags;
