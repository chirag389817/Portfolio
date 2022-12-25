import React from "react";

const style = {
    width: "100vw",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

function Error() {
    return <h1 style={style}>404! Page not found :(</h1>;
}

export default Error;
