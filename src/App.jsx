import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import { useStateValue } from "./state/Provider";
import { getTokenFromUrl } from "./constants/Heavens";
import Player from "./components/Player/Player";
import Login from "./components/Login/Login";

const spotify = new SpotifyWebApi();

const App = () => {
	const [{ token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		let _token = hash.access_token;
		console.log("token : ", _token);
		if (_token) {
			spotify.setAccessToken(_token);

			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify
        .getPlaylist({_token})
        .then((response) =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );
			spotify.getMyTopArtists().then((response) =>
				dispatch({
					type: "SET_TOP_ARTISTS",
					top_artists: response,
				})
			);

			dispatch({
				type: "SET_SPOTIFY",
				spotify: spotify,
			});

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});

			spotify
        .getUserPlaylists({_token})
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
        });
		}
	}, [token, dispatch]);

	console.log(token);

	return (
		<div className="App">
			{!token && <Login />}
			{token && <Player spotify={spotify} />}
		</div>
	);
};

export default App;
