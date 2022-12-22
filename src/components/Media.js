import React from "react";
import "./Media.css";
import Ic_insta from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
    return (
        <div className="mcontainer">
            <div className="media">
                <a target="_blank" href="https://www.instagram.com/patel._.cs/">
                    <Ic_insta className="icon" />
                </a>
                <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100072052472890"
                >
                    <FacebookIcon className="icon" />
                </a>
                <a target="_blank" href="https://twitter.com/Chirag_0611">
                    <TwitterIcon className="icon" />
                </a>
                <a target="_blank" href="https://github.com/chirag389817">
                    <GitHubIcon className="icon" />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/chirag-patel-36b875232/"
                >
                    <LinkedInIcon className="icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
