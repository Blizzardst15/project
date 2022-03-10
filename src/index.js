import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About  from "./components/Pages/About"
import Contact  from "./components/Pages/Contact"
import Home from "./components/Pages/Home"
import NoPage from "./components/Pages/NoPage"


ReactDOM.render(
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="NoPage" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

