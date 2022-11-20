import React, { useEffect } from "react";
import { useStateValue } from "../state/Provider";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from "@mui/material";

function Footer({ spotify }) {
	const [{ item, playing }, dispatch] = useStateValue();

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((r) => {
			console.log(r);

			dispatch({
				type: "SET_PLAYING",
				playing: r.is_playing,
			});

			dispatch({
				type: "SET_ITEM",
				item: r.item,
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
		spotify.getMyCurrentPlayingTrack().then((r) => {
			dispatch({
				type: "SET_ITEM",
				item: r.item,
			});
			dispatch({
				type: "SET_PLAYING",
				playing: true,
			});
		});
	};

	const skipPrevious = () => {
		spotify.skipToPrevious();
		spotify.getMyCurrentPlayingTrack().then((r) => {
			dispatch({
				type: "SET_ITEM",
				item: r.item,
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
				<ShuffleIcon className="Footer-green" />
				<SkipPreviousIcon onClick={skipNext} className="Footer-icon" />
				{playing ? (
					<PauseCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="Footer-icon"
					/>
				) : (
					<PlayCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="Footer-icon"
					/>
				)}
				<SkipNextIcon onClick={skipPrevious} className="Footer-icon" />
				<RepeatIcon className="Footer-green" />
			</div>
			<div className="Footer-right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
