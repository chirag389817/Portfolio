import React from "react";
import "./Profile.css";
const pimage = require("../images/pimage.jpg");

function Profile() {
    return (
        <div className="profile-container">
            <img src={pimage} alt="pimage" id="pimage" />
            <div className="ptext">
                <p className="name">Patel Chirag</p>
                <p className="skill">a developer and freelancer</p>
            </div>
        </div>
    );
}

export default Profile;
