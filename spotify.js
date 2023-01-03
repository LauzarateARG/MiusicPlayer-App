const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "93ff16f272fa4ed49cd5dc4843728a81";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;