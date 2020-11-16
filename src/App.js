import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Hot from "./components/hot";
import New from "./components/new";
import Top from "./components/top";
import SingleThread from "./components/singleThread";
import Navigation from "./components/navigation";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Reddit } from "./images/reddit.svg";
import { IconButton } from "@material-ui/core";
import ViewListIcon from "@material-ui/icons/ViewList";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import DashboardIcon from "@material-ui/icons/Dashboard";
import "./style.css";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [view, setView] = useState("list");

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <Router>
      <main>
        <div className="subreddit">
          <div className="navLogo">
            <Logo width="40" />
            <Reddit width="80" />
          </div>
          <div className="subreddit--community">
            <h1>3D Printing</h1>
            <p>
              /r/3DPrinting is a place where makers of all skill levels and
              walks of life can learn about and discuss 3D printing.
            </p>
          </div>
          <div className="subreddit--navigation">
            <Navigation />
          </div>
          <div className="subreddit--search">
            <input
              type="text"
              placeholder="Search titles..."
              value={searchValue}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className="subreddit--viewSelector">
            <IconButton
              onClick={() => setView("list")}
              className={view === "list" && "active"}
            >
              <ViewListIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton
              onClick={() => setView("card")}
              className={view === "card" && "active"}
            >
              <AspectRatioIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton
              onClick={() => setView("masonry")}
              className={view === "masonry" && "active"}
            >
              <DashboardIcon style={{ color: "#fff" }} />
            </IconButton>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/hot"
            component={() => <Hot filter={searchValue} view={view} />}
          />
          <Route
            exact
            path="/new"
            component={() => <New filter={searchValue} view={view} />}
          />
          <Route
            exact
            path="/top"
            component={() => <Top filter={searchValue} view={view} />}
          />
          <Route path="/:threadId" component={SingleThread} />
          <Route
            exact
            path="/"
            component={() => <Hot filter={searchValue} view={view} />}
          />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}
