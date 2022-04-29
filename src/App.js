import React from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const gottenToken = hash.access_token;
    if (gottenToken) {
      dispatch({
        type: "SET_TOKEN",
        token: gottenToken,
      });
      spotify.setAccessToken(gottenToken);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXbNG2KDcFcKOF").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);
  return <>{token ? <Player spotify={spotify} /> : <Login />}</>;
}

export default App;
