import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCustomer from "./components/create-customer.component";

function App() {
  return (
    <Router>
    <div className="container">
  <Route path="/" component={CreateCustomer} />
  </div>
  </Router>
);
}

export default App;
