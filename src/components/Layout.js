// Layout.js
import React from 'react';
import Header from './Header';
import Router from '../router';

function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="content">
            </main>
        </div>
    );
}

export default Layout;
