import React from "react";
import "./PCard.css";

function PCard({ project }) {
    return (
        <div className="pcard">
            <img src={project.logo} className="pcimg" />
            <div className="pctitle">{project.name}</div>
            <p className="pcdisc">{project.disc}</p>
            <div className="pclinks">
                <a
                    className="pclink"
                    target="_blank"
                    href={project.gitlink}
                    alt="logo"
                >
                    GitHub
                </a>
                <a className="pclink" target="_blank" href={project.plink}>
                    Preview
                </a>
            </div>
        </div>
    );
}

export default PCard;
