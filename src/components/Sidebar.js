import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "../DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispath] = useDataLayerValue();
  const playslistsElement = playlists?.items?.map((playlist) => {
    return <SidebarOption title={playlist.name} />;
  });
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar-playlist-title">Playlists</strong>
      <hr />
      {playlists ? (
        <h4 className="no-playlist">No playlist</h4>
      ) : (
        { playslistsElement }
      )}
    </div>
  );
};

export default Sidebar;
