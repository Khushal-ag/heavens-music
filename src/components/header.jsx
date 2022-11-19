import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useDataLayerValue} from "./DataLayer";

function Header(){
    const [{ user }, dispatch] = useDataLayerValue();

    return(
    <div className="header">
        <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
        </div>
        <div className="header_right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
v            <h4>{user?.display_name}</h4>
        </div>
    </div>
    );
}