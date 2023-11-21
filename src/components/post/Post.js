import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "../input_option/InputOption";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
        <InputOption Icon={CommentIcon} title='Comment' color='gray'/>
        <InputOption Icon={ShareIcon} title='Repost' color='gray'/>
        <InputOption Icon={SendIcon} title='Send' color='gray'/>
      </div>
    </div>
  );
}

export default Post;
