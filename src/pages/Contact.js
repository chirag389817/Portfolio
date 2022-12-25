import React from "react";
import "./Contact.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Media from "../components/Media";

function Contact() {
    const submit = (e) => {
        e.preventDefault();
        let msg = `Email :- ${e.target.email.value}<br/>Subject :- ${e.target.sub.value}<br/><br/>${e.target.msg.value}`;
        window.Email.send({
            SecureToken: "85addf75-f24d-4ed4-81b7-361603c98dc9",
            To: "chirag389817+portfolio@gmail.com",
            From: "chirag389817@gmail.com",
            Subject: e.target.sub.value,
            Body: msg
        }).then((message) => {
            if (message === "OK") {
                alert("main send successfully...");
                e.target.reset();
            } else alert(message);
        });
    };
    return (
        <div className="ccontainer">
            <form className="form-mail" onSubmit={submit}>
                <div className="item">
                    <h3>Contact with Email</h3>
                </div>
                <div className="item">
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="item">
                    <input
                        name="sub"
                        type="text"
                        placeholder="Subject"
                        required
                    />
                </div>
                <div className="item">
                    <textarea
                        name="msg"
                        cols="50"
                        rows="5"
                        placeholder="Your message"
                        required
                    ></textarea>
                </div>
                <div className="item">
                    <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </div>
            </form>
            <Media />
        </div>
    );
}

export default Contact;
