import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

const Nav = props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Link to="/">Home</Link>
        <Button>
          <Link to="/create-form">Crée</Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Nav;
