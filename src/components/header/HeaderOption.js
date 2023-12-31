import { Avatar } from "@mui/material";
import "./HeaderOption.css";
import React from "react";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon"></Icon>}
      {avatar && (
        <Avatar className="headerOption__avatar">
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
