import React from "react";
import { NavLink } from "react-router-dom";
// Material-UI imports
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";

export default function Navigation(props) {
  const classes = useStyles();
  const menuItems = [
    {
      link: "/hot",
      text: "Hot",
      icon: <WhatshotOutlinedIcon style={{ fontSize: 20 }} />
    },
    {
      link: "/new",
      text: "New",
      icon: <AccessTimeOutlinedIcon style={{ fontSize: 20 }} />
    },
    {
      link: "/top",
      text: "Top",
      icon: <TrendingUpOutlinedIcon style={{ fontSize: 20 }} />
    }
  ];

  const menu = menuItems.map(function (item, key) {
    return (
      <Box key={key} className={classes.menuItem}>
        <NavLink
          to={item.link}
          className={classes.menuLink}
          activeClassName="active"
        >
          {item.icon}
          <Typography
            className={classes.iconTitle}
            component="small"
            align="center"
            gutterBottom
          >
            {item.text}
          </Typography>
        </NavLink>
      </Box>
    );
  });

  return <nav role="navigation">{menu}</nav>;
}

const useStyles = makeStyles({
  menuLink: {
    textDecoration: "none",
    padding: ".5em",
    display: "flex",
    color: "#fff",
    transition: ".3s all ease-in-out",
    "&:hover": {
      color: "#000"
    },
    "&.active": {
      color: "#00477e"
    },
    "&:hover svg": {
      fill: "#000"
    },
    "&.active svg": {
      fill: "#00477e"
    }
  },
  menuItem: {
    width: "100%",
    boxSizing: "border-box"
  },
  icon: {
    display: "block !important",
    margin: "0 auto",
    width: "auto",
    height: "2em !important",
    fill: "#767676"
  },
  iconTitle: {
    lineHeight: 1.3,
    display: "block",
    marginLeft: ".5em",
    textTransform: "uppercase",
    fontWeight: 700
  }
});
