import { Home, LibraryMusic, Search } from "@mui/icons-material";

import { useStateValue } from "../state/Provider";
import SidebarOption from "./SidebarOption";
import Logo from "../assets/images/SidebarLogo.png";
import "./Sidebar.css";

const Sidebar = () => {
	const [{ playlists }] = useStateValue();
	console.log(playlists);

	return (
		<div className="Sidebar">
			<img className="Sidebar-logo" src={Logo} alt="HeavenMusic logo" />
			<SidebarOption Icon={Home} option="Home" />
			<SidebarOption Icon={Search} option="Search" />
			<SidebarOption Icon={LibraryMusic} option="Your Library" />
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
