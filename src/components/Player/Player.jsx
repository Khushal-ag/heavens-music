import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import "./Player.css";

const Player = ({ spotify }) => {
	return (
		<div className="Player">
			<div className="Player__body">
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer spotify={spotify} />
		</div>
	);
};
export default Player;
