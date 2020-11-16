import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ForumIcon from "@material-ui/icons/Forum";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";

export default function ThreadCard(props) {
  let thumbnail;
  props.thumbnail.substring(0, 4) === "http"
    ? (thumbnail = (
        <div
          className="threadCard--thumbnail"
          style={{ backgroundImage: `url(${props.thumbnail})` }}
        ></div>
      ))
    : (thumbnail = (
        <div className="threadCard--thumbnail">
          <ForumIcon style={{ fontSize: 32 }} />
        </div>
      ));

  return (
    <div className="threadCard">
      {thumbnail}
      <div className="threadCard--score">
        <KeyboardArrowUpIcon style={{ fontSize: 32, color: "#FF4500" }} />
        {props.score}
        <KeyboardArrowDownIcon style={{ fontSize: 32, color: "#FF4500" }} />
      </div>
      <div className="threadCard--content">
        <div className="threadCard--content--topRow">
          <div className="threadCard--author">
            <em>{props.author}</em>
          </div>
          <div className="threadCard--comments">
            <ChatBubbleOutlineIcon
              style={{ fontSize: 12, color: "#FF4500", paddingRight: ".2em" }}
            />{" "}
            {props.numcomments}
          </div>
          <div className="threadCard--share">
            <ShareIcon
              style={{ fontSize: 12, color: "#FF4500", paddingRight: ".2em" }}
            />
            Share
          </div>
        </div>
        <h2 className="threadCard--title">
          <Link to={`/${props.id}`}>{props.title}</Link>
        </h2>
      </div>
    </div>
  );
}
