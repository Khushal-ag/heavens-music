import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "/constants/heavens.js";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists);

    return (
      <div className="Sidebar">
        <img className="Sidebar-logo" src="/assets/image/800x300 HeavenMusic.png" alt="HeavenMusic logo" />
        <SidebarOption Icon={HomeIcon} option="Home" />
        <SidebarOption Icon={SearchIcon} option="Search" />
        <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
        <br />
        <strong className="Sidebar-title">PLAYLISTS</strong>
        <hr />
        {playlists?.items?.map((playlist) => (
          <SidebarOption option={playlist.name} />
        ))}
      </div>
    );
};

export default Sidebar;