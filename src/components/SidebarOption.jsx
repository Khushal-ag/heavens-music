import "./SidebarOption.css";

const SidebarOption = ({ option = "test", Icon }) => {
	return (
		<div className="SidebarOption">
			{Icon && <Icon className="SidebarOption-icon" />}
			{Icon ? <h4>{option}</h4> : <p>{option}</p>}
		</div>
	);
};

export default SidebarOption;
