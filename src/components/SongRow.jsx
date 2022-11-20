import "./SongRow.css";

const SongRow = ({ track, playSong }) => {
	console.log(track);
	return (
		<div className="SongRow" onClick={() => playSong(track.id)}>
			<img className="SongRow__album" src={track.album.images[0].url} alt="" />
			<div className="SongRow__info">
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(", ")} -{" "}
					{track.album.name}
				</p>
			</div>
		</div>
	);
};

export default SongRow;
