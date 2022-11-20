import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function Header({spotify}) {
    const [{ user }, dispatch] = useStateValue();

    return(
    <div className="Header">
        <div className="Header-left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
        </div>
        <div className="Header-right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
v            <h4>{user?.display_name}</h4>
        </div>
    </div>
    );
}

export default Header;