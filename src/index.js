import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Thorns from "./Components/Thorns"

ReactDOM.render(
  <Router>
    <Thorns />
  </Router>
  , document.getElementById("root"))



  //CD into thorns-and-roses-api and run json-server -p 8088 -w database.json 
  //In seperate terminal cd into thorns and roses src and npm start.