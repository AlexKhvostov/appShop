import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Posts from "./posts/Posts";
import Post from "./posts/Post";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Posts />} />
                <Route path="/post/:postId" element={<Post />} />

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
//
// reportWebVitals();
