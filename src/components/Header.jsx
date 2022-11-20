import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../state/Provider";

function Header({ spotify }) {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="Header">
			<div className="Header-left">
				<SearchIcon />
				<input
					placeholder="Search for Artists, Songs, or Podcasts "
					type="text"
				/>
			</div>
			<div className="Header-right">
				<Avatar alt={user?.display_name} src={user?.images[0].url} />v{" "}
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
