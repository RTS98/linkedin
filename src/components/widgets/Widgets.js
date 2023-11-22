import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon></InfoIcon>
      </div>
      {newsArticle("PapaReact is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: UK", "Top news - 866 readers")}
      {newsArticle("Tech Trends: UAE", "Top news - 1000 readers")}
      {newsArticle("Job Market: USA", "Top news - 1500 readers")}
    </div>
  );
}

export default Widgets;
