import { Avatar } from "@mui/material";
import "./HeaderOption.css";
import React from "react";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon"></Icon>}
      {avatar && (
        <Avatar className="headerOption__avatar" src={avatar}></Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
