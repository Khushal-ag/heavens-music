export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "4e47c40106f64fca8ba41824e1bb5566";

const scopes = [
	"user-read-playback-position",
	"user-read-email",
	"user-library-modify",
	"user-read-private",
	"playlist-modify-public",
	"ugc-image-upload",
	"user-follow-modify",
	"user-read-playback-state",
	"user-top-read",
	"streaming",
	"user-library-read",
	"playlist-read-private",
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-top-read",
	"user-modify-playback-state",
	"user-follow-read",
	"playlist-modify-private",
	"playlist-read-collaborative",
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
