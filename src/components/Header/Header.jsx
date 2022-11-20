import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";

import { useStateValue } from "../../state/Provider";
import "./Header.css";

const Header = ({ spotify }) => {
	const [{ user }] = useStateValue();

	return (
		<div className="Header">
			<div className="Header-left">
				<Search />
				<input
					placeholder="Search for Artists, Songs, or Podcasts "
					type="text"
				/>
			</div>
			<div className="Header-right">
				<Avatar alt={user?.display_name} src={user?.images[0]?.url} />{" "}
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
