import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginRegister from "../features/Auth/LoginRegister";
import CarDetails from "../features/Car/CarDetails";
import { AuthContextProvider } from "../features/Auth/Auth";
import * as firebase from "firebase/app";
// import background from "../components/images/background.jpg";

import Nav from "./Nav";

import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyAl-A9o7UI8WmMw3sfUSJjWGQed1LbL2Yw",
  authDomain: "car2ride-890ef.firebaseapp.com",
  databaseURL: "https://car2ride-890ef.firebaseio.com",
  projectId: "car2ride-890ef",
  storageBucket: "car2ride-890ef.appspot.com",
  messagingSenderId: "96281147628",
  appId: "1:96281147628:web:7e1810bea1ad2d7747cdc9",
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <AuthContextProvider>
      <div className="">
        <Router>
          <Nav />
          <Route exact path="/" />
          <Route exact path="/login" component={LoginRegister} />
          <Route exact path="/register" component={LoginRegister} />
          <Route exact path="/car" component={CarDetails} />
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
