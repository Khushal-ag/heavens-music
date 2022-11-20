import { Favorite, MoreHoriz, PlayCircle } from "@mui/icons-material";

import { useStateValue } from "../state/Provider";
import Header from "./Header";
import SongRow from "./SongRow";
import "./Body.css";

const Body = (spotify) => {
	const [{ discover_weekly }, dispatch] = useStateValue();

	const playPlaylist = () => {
		spotify
			.play({
				context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
			})
			.then(() => {
				spotify.getMyCurrentPlayingTrack().then((response) => {
					dispatch({
						type: "SET_ITEM",
						item: response.item,
					});
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then(() => {
				spotify.getMyCurrentPlayingTrack().then((res) => {
					dispatch({
						type: "SET_ITEM",
						item: res.item,
					});
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	return (
		<div className="Body">
			<Header spotify={spotify} />

			<div className="Body-info">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="Body-infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className="Body-songs">
				<div className="Body-icons">
					<PlayCircle className="Body-shuffle" onClick={playPlaylist} />
					<Favorite fontSize="large" />
					<MoreHoriz />
				</div>

				{discover_weekly?.tracks.items.map((item) => (
					<SongRow playSong={playSong} track={item.track} />
				))}
			</div>
		</div>
	);
};

export default Body;
