import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-left">
                <img
                    className="Footer-albumLogo"
                    src="" alt=""
                />
                <div className="Footer-songInfo">
                    <h4>Song Name</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="Footer-center">
                <ShuffleIcon className="Footer-green" />
                <SkipPreviousIcon className="Footer-icon" />
                <PlayCircleOutlineIcon fontSize="large" className="Footer-icon" />
                <SkipNextIcon className="Footer-icon" />
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