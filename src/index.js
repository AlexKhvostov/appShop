import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import UserInfo from "./git_app/UserInfo";
import RepsInfo from "./git_app/RepsInfo";
import OneOfRepositories from "./git_app/OneOfRepositories";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>


        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
                <div className="container-fluid">
                    <Link  to={`/`} className="navbar-brand">В начало</Link>
                </div>
            </nav>

            <div className="content bg-dark bg-gradient">
                <Routes>

                    <Route path="/" element={<UserInfo />} />
                    <Route path="/AlexKhvostov/:name" element={<OneOfRepositories />} />

                </Routes>
            </div>

        </BrowserRouter>
    </React.StrictMode>
);

//
// reportWebVitals();
