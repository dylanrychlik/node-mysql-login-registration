import React, { Component } from "react";
import "./App.css";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Label from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//import TransformText from "./TransformText";
import Link from '@material-ui/core/Link';
import Popover from '@material-ui/core/Popover';
//import * as Yup from 'yup';
//import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import axios from "axios";



  class App extends React.Component {
  constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="App">
      
        <header className="App-header">
         <Typography variant="h2" gutterBottom
         style={{ color: "black" }}> Pubdata.live
           </Typography>
          <div className="Login" width="120px">
         
            <Label
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
            />
            <Typography variant="h2" gutterBottom
         style={{ color: "black" }}> Sign in
           </Typography>
             <Typography variant="h6" gutterBottom
         style={{ color: "black" }}> Username or email
           </Typography>
          
            <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
            /> 
            <Typography variant="h6" gutterBottom
         style={{ color: "black" }}>  Password
         <Link href="#" onClick={console.log("SUCCESS!")}>
           {'                   Forgot password?'}
      </Link>
           </Typography>
            <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />

            <div className="Button">
             <Button style={{ background: "Orange",  borderstyle: "solid", color: "Black" }}>Sign-in</Button>
            </div>



            <div className="Button">
             <Button style={{ background: "Silver", color: "Black" }}>New to Pubdata.live? Sign in here</Button>
            </div>
          </div>
         
        </header>
      </div>
    );
  }
}

export default App;