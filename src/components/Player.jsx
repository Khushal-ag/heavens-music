import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player({ spotify }) {
	return (
		<div className="Player">
			<div className="Player-body">
				<Sidebar />
				<Body />
			</div>
			<Footer />
		</div>
	);
}
export default Player;
