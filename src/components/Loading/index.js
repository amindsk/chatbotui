import React from "react";
import './laoding.css';
const Chat = ({ isLoading, text }) => {
    if(isLoading) {
        return (
            <>
                <div className="backdrop">
                </div>
                <div className="text">
                    <div className="animation"></div>
                    <h1>{text}</h1>
                </div>
            </>
        );
    }
    return;
}

export default Chat;