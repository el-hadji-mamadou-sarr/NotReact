import './App.css';
import React from "react";


import {Hooksc} from "./Hooksc";
import {ShortCircuit} from "./ShortCircuit";
import {ShowHide} from "./ShowHide";
import {Forms} from "./Forms";
import {MultipleInputs} from "./MultipleInputs";
import {Reducer} from "./Reducer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Routing} from "./Routing";
import {Hooks} from "./Hooks";
import {FormValidation} from "./FormValidation";

function App() {

  return (
      <Router>
          <div>
              {/*<div>
                  <Link to="/">Forms</Link>
                  <Link to="/Hooks">Hooks</Link>

              </div>*/}
              <Routes>
                  <Route path="/" element={<Reducer />} />
                  <Route path="/Hooks" element={<Hooks />} />
                  <Route path="*" element={<h1>Error page</h1> } />
              </Routes>
          </div>
      </Router>

  );
}

export default App;
