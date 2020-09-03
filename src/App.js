import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home.js";
import Dashboard from "./components/Dashboard/Main/Dashboard";
import NotesDetail from "./components/Dashboard/Notes/NotesDetail";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import AddNewNotes from "./components/Dashboard/Notes/AddNewNotes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/editor" component={NotesDetail} />
          <Route path="/dashboard/addnote" component={AddNewNotes} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
