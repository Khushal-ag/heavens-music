import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./constants/Heavens";

const spotify = new SpotifyWebApi();

const App = () => {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		console.log("Login Sucessfully...");

		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => console.log(user));
		}
	}, []);

	return <div className="App">{token ? <Player /> : <Login />}</div>;
};

export default App;
