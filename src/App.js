import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import PurchasingRequest from "./components/PurchasingRequest/PurchasingRequest";
import ManageManufacturingPlan from "./components/ManageManufacturingPlan/ManageManufacturingPlan"

import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import 'antd/dist/antd.css';
import ProductManager from "./components/Product-manage";
function App(props) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Router>
        <div className="App">
          <Menu></Menu>
          <div className="content">
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route exact path="/manage-work-schedule">
              <ProductManager/>
            </Route>
              <Route exact path="/manage-purchasing-request">
                <PurchasingRequest />
              </Route>
              <Route exact path="/manage-manufacturing-plan">
                <ManageManufacturingPlan />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </LocalizationProvider>
  );
}
export default App;
