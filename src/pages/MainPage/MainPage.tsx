import React from 'react';
import './MainPageCSS.css';
import { NavLink } from 'react-router-dom';

const MainMenu: React.FC = () => {
    return (
        <div className="main-page">
            <header className="header">
                <h1 className="title">Üdvözöllek a Growpass bemutatkozó oldalán</h1>
                <p className="subtitle">Your financial growth partner</p>
            </header>
            <section className="features">
                <div className="feature-card">
                    <h2>Teszt oldal</h2>
                    <NavLink to="/test">Teszt oldal</NavLink>
                </div>
                <div className="feature-card">
                    <h2>Financial Advice</h2>
                    <p>Get expert financial advice to make informed decisions.</p>
                </div>
                <div className="feature-card">
                    <h2>Secure Transactions</h2>
                    <p>Experience secure and fast transactions with our platform.</p>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1wNGpgpPUEHzBduO" title="Teszt videó" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            </section>
        </div>
    );
};

export default MainMenu;