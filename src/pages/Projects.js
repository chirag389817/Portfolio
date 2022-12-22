import React from "react";
import "./Projects.css";
import PCard from "../components/PCard";
import projects from "../Json/projects.json";

const loadProject = (p, i) => {
    return <PCard key={i} project={p} />;
};

function Projects() {
    return (
        <div className="pcontainer">
            <div className="pgrid">{projects.map(loadProject)}</div>
        </div>
    );
}

export default Projects;
