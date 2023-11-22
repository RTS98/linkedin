import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";

function Header() {
  const dispatch = useDispatch();

  const signOutApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png"
          alt=""
        ></img>

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search"></input>
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="My Notification" />
        <HeaderOption avatar={true} title="Me" onClick={signOutApp} />
      </div>
    </div>
  );
}

export default Header;
