import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <AppBar position="sticky" className="App-bar">
        <Toolbar>
          <Typography variant="h6">My Music App</Typography>
        </Toolbar>
      </AppBar>
      {/* <NavBar /> */}
      <header className="App-header">
        <LoginForm Login={ `Login` }></LoginForm>
        
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="blank"
            rel="noopener noreferrer"
          >
            {/* Login */}
          </a>
          {/* <button>Click me</button> */}
          {/* <button
            onClick={() => console.log("button clicked")}
            variant="Contained"
            color="primary"
          >
            {/* Click me twice! */}
          {/* </button>  */}
        </p>
      </header>
   
    </div>
  );
}

export default App;
