import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../DataLayer";

const Header = ({ spotify }) => {
  const [search, setSearch] = React.useState("");
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Artists, Songs, others..."
        />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
