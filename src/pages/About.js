import React from "react";
import "./About.css";
import pimage from "../images/pimage.jpg";

function About() {
    return (
        <div className="acontainer">
            <div className="aimage-con">
                <img src={pimage} alt="profile" />
                <div className="name">Patel Chirag Sunilbhai</div>
            </div>
            <div className="aitem">
                <div className="atitle">Education</div>
                <div className="aitem-con">
                    <div className="item-type">
                        <div className="item-title">
                            Graduation (Currently pursuing)
                        </div>
                        <div className="item-line">
                            Bachlor of Computer Engineering
                        </div>
                        <div className="item-line">
                            L.D. College of Engineering
                        </div>
                        <div className="item-line">Ahmedabad 382430</div>
                    </div>
                    <div className="item-type">
                        <div className="item-title">
                            12 <sup>th</sup> (2020-21)
                        </div>
                        <div className="item-line">PCM 92%</div>
                        <div className="item-line">AB School - Chikhli</div>
                        <div className="item-line">Navsari 396580</div>
                    </div>
                </div>
            </div>
            <div className="aitem">
                <div className="atitle">Address</div>
                <div className="aitem-con">
                    <div className="item-type">
                        <div className="item-title">Current</div>
                        <div className="item-line">522 Block E</div>
                        <div className="item-line">
                            LDCE Hostel, Navrangpura
                        </div>
                        <div className="item-line">Ahmedabad 382430</div>
                    </div>
                    <div className="item-type">
                        <div className="item-title">Permanent</div>
                        <div className="item-line">69, Nishal Faliya</div>
                        <div className="item-line">Ambabari, Vansda</div>
                        <div className="item-line">Navsari 396580</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
