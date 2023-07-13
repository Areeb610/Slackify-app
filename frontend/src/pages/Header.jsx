import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className="header__main">
      <AccessTimeIcon className="time__icon" />
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search Programmers Force" />
      </div>
      <HelpOutlineIcon className="help__icon" />
      <PermIdentityIcon className="avatar" />
    </div>
  );
}

export default Header;
