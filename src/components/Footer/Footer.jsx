import { useEffect } from "react";
import { Grid, Slider } from "@mui/material";
import {
	PauseCircleOutline,
	PlayCircle,
	PlaylistPlay,
	Repeat,
	Shuffle,
	SkipNext,
	SkipPrevious,
	VolumeDown,
} from "@mui/icons-material";

import { useStateValue } from "../../state/Provider";
import "./Footer.css";

const Footer = ({ spotify }) => {
	const [{ item, playing }, dispatch] = useStateValue();

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((response) => {
			console.log(response);

			dispatch({
				type: "SET_PLAYING",
				playing: response.is_playing,
			});

			dispatch({
				type: "SET_ITEM",
				item: response.item,
			});
		});
	}, [spotify, dispatch]);

	const handlePlayPause = () => {
		if (playing) {
			spotify.pause();
			dispatch({
				type: "SET_PLAYING",
				playing: false,
			});
		} else {
			spotify.play();
			dispatch({
				type: "SET_PLAYING",
				playing: true,
			});
		}
	};

	const skipNext = () => {
		spotify.skipToNext();
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
	};

	const skipPrevious = () => {
		spotify.skipToPrevious();
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
	};

	return (
		<div className="Footer">
			<div className="Footer-left">
				<img
					className="Footer-albumLogo"
					src={item?.album.images[0].url}
					alt={item?.name}
				/>
				{item ? (
					<div className="Footer-songInfo">
						<h4>{item.name}</h4>
						<p>{item.artists.map((artist) => artist.name).join(", ")}</p>
					</div>
				) : (
					<div className="Footer-songInfo">
						<h4>No song is playing</h4>
						<p>...</p>
					</div>
				)}
			</div>
			<div className="Footer-center">
				<Shuffle className="Footer-green" />
				<SkipPrevious onClick={skipNext} className="Footer-icon" />
				{playing ? (
					<PauseCircleOutline
						onClick={handlePlayPause}
						fontSize="large"
						className="Footer-icon"
					/>
				) : (
					<PlayCircle
						onClick={handlePlayPause}
						fontSize="large"
						className="Footer-icon"
					/>
				)}
				<SkipNext onClick={skipPrevious} className="Footer-icon" />
				<Repeat className="Footer-green" />
			</div>
			<div className="Footer-right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
