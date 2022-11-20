import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Body from "./Body";
import "./Player.css";

const Player = ({ spotify }) => {
	return (
		<div className="Player">
			<div className="Player-body">
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer spotify={spotify} />
		</div>
	);
};
export default Player;
