import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    useEffect(function () {
        const togg = document.getElementById("toggle");
        const checknav = document.getElementById("checknav-wrapper");
        window.onclick = (e) => {
            if(e.target === checknav){
                togg.classList.toggle("active");
                checknav.classList.toggle("active");
            }
        };
        togg.addEventListener("click", () => {
            togg.classList.toggle("active");
            checknav.classList.toggle("active");
        });
    }, []);

    return (
        <nav className="navigation_container">
            <div id="toggle-wrapper">
                <div id="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="nav_wrapper" id="nav_wrapper">
                <div className="navigation_item active">
                    <Link to="/My/">About Me</Link>
                </div>
                <div className="navigation_item">
                    <Link to="/My/project">Project</Link>
                </div>
                <div className="navigation_item">
                    <Link to="/My/Contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;