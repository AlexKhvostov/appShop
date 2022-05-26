import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import OneOfRepositories from "./git_app/OneOfRepositories";
import Form from "./form/Form";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="content">
                <Routes>

                    <Route path="/" element={<Form />} />
                    <Route path="/AlexKhvostov/:name" element={<OneOfRepositories />} />

                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

//
// reportWebVitals();
