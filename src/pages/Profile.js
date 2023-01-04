import React from "react";
import "./Profile.css";
const pimage = require("../images/pimage.jpg");

function Profile() {
    return (
        <div className="profile-container">
            <div className="ptext">
                <p className="name">Patel Chirag</p>
                <p className="skill">A developer and freelancer</p>
            </div>
            <img src={pimage} alt="pimage" id="pimage" />
        </div>
    );
}

export default Profile;
