// Router.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import WordSearchPage from './pages/WordSearchPage';
import Home from "./pages/Home";

function Router() {
    return (
        <BrowserRouter basename="/">
            <Layout />
            <Routes path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/wordsearch" element={<WordSearchPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
