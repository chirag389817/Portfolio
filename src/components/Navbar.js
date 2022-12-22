import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Close from "@mui/icons-material/Close";

const navHide = {
    bar: "block",
    close: "none",
    list: "none"
};
const navShow = {
    bar: "none",
    close: "block",
    list: "flex"
};

function Navbar() {
    const [navStatus, setNavStatus] = useState(navHide);
    const changeNavStatus = (event) => {
        if (navStatus.bar === "block") setNavStatus(navShow);
        else setNavStatus(navHide);
    };
    return (
        <div className="nav-con">
            <nav className="navbar">
                <div className="nav-title">Portfolio</div>
                <div className="nav-menu">
                    <MenuRounded
                        style={{ display: navStatus.bar }}
                        onClick={changeNavStatus}
                    />
                    <Close
                        style={{ display: navStatus.close }}
                        onClick={changeNavStatus}
                    />
                </div>
                <ul className="nav-list" style={{ display: navStatus.list }}>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/"
                            onClick={changeNavStatus}
                        >
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/projects"
                            onClick={changeNavStatus}
                        >
                            Projects
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://www.google.com"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/about"
                            onClick={changeNavStatus}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/contact"
                            onClick={changeNavStatus}
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
