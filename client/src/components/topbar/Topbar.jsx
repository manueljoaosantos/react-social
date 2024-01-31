import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logoutCall = async (e) => {
    e.preventDefault();
    window.localStorage.clear();
    navigate("/login");
}; 

return (
<div className="topbarContainer">
  <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Manel social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        { !user && <Link to="/login" style={{ textDecoration: "none" }}>
          <span className="topbarLink">Login</span>
        </Link>}
        { user && <Link to="/login" onClick={logoutCall} style={{ textDecoration: "none" }}>
          <span className="topbarLink">Logout</span>
        </Link>}



          
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
