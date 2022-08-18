import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChooseUri from "./components/ChooseUri";
import FhirAuthoriser from "./components/FhirAuthoriser";
import AuthorisedPage from "./pages/AuthorisedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ChooseUri/>}/>
        <Route path={"/works"} element={<FhirAuthoriser redirectUri="./recv_redirect"/>}/>
        <Route path={"/fails"} element={<FhirAuthoriser redirectUri="./new_report"/>}/>
        <Route path={"/recv_redirect"} element={<AuthorisedPage/>}/>
        <Route path={"/new_report"} element={<AuthorisedPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
