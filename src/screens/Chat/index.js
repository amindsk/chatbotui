import React, { useEffect, useRef, useState } from "react";
import './index.css';
import { PaperPlane, Pin, UnPin } from "../../common/icons";
import { handleChangeMessage, getMessage, getMessages, getChatLoading, sendMessage, sendMessageGraph, handleTogglePinToDashboard } from "./chatSlice";
import { useDispatch, useSelector } from "react-redux";
import DFTable from "./DFTable";
import { handleAddWidget, handleRemoveWidget } from "../Dashboard/dashboardSlice";
import Loading from '../../components/Loading';
const Chat = () => {

    const message = useSelector(getMessage);
    const messages = useSelector(getMessages);
    const chatLaoding = useSelector(getChatLoading);
    const dispatch = useDispatch();

    return (
        <div className="chat-main">
            <div className="side-bar"></div>
            <div className="chat">
                {/* <div className="chat-title">
                    <h1>Chat Title</h1>
                </div> */}
                <div className={messages.length > 0 ? 'chat-messages' : 'chat-messages-with-options'}>
                    {messages.map(msg => (
                        <div key={msg.id}>
                            <div className="sent-message">
                                <h3>{msg.message}</h3>
                            </div>
                            <div className="received-message">
                                <h3><code>{msg.sql_query}</code></h3>
                            </div>
                            <div className="received-message">
                                <DFTable df={msg.df} />
                            </div>
                            {!msg.graph && (
                                <div className="visualization-options">
                                    <h3>How do you want to visualize the data frame ?</h3>
                                    <div className="visualization-options-pair">
                                        <button onClick={() => dispatch(sendMessageGraph({ messageId: msg.id, message: msg.message, graph: "Use Intelligence", df: msg.df }))}>Use Intelligence</button>
                                        <button onClick={() => dispatch(sendMessageGraph({ messageId: msg.id, message: msg.message, graph: "Pie Chart", df: msg.df }))}>Pie Chart</button>
                                    </div>
                                    <div className="visualization-options-pair">
                                        <button onClick={() => dispatch(sendMessageGraph({ messageId: msg.id, message: msg.message, graph: "Bar Chart", df: msg.df }))}>Bar Chart</button>
                                        <button onClick={() => dispatch(sendMessageGraph({ messageId: msg.id, message: msg.message, graph: "Line Graph", df: msg.df }))}>Line Graph</button>
                                    </div>
                                </div>
                            )}
                            {msg.graph && (
                                <div className="visualization">
                                    <div className="visualization-title">
                                        <button className="btn-pin" onClick={() => {
                                            dispatch(handleTogglePinToDashboard(msg.id));
                                            if (msg.pinnedToDashboard) {
                                                dispatch(handleRemoveWidget({ id: msg.id }));
                                            }
                                            else {
                                                dispatch(handleAddWidget({ url: msg.graph, id: msg.id }));
                                            }
                                        }}>
                                            {msg.pinnedToDashboard ? (
                                                <UnPin fill="rgb(113, 42, 255)" width={20} height={20} />
                                            ) : (<Pin fill="rgb(113, 42, 255)" width={20} height={20} />)}
                                        </button>
                                        <h3>Pin to dashboard</h3>
                                    </div>
                                    <div className="visualization-content">
                                        <iframe src={msg.graph}></iframe>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {messages.length === 0 && (
                    <div className="chat-sample-questions">
                        <div className="chat-sample-questions-pair">
                            <div className="chat-sample-question">
                                <button onClick={() => dispatch(sendMessage({ message: "What sort of data do you have?" }))}>What sort of data do you have?</button>
                            </div>
                            <div className="chat-sample-question">
                                <button onClick={() => dispatch(sendMessage({ message: "Which month of data do you posses?" }))}>Which month of data do you posses?</button>
                            </div>
                        </div>
                        <div className="chat-sample-questions-pair">
                            <div className="chat-sample-question">
                                <button onClick={() => dispatch(sendMessage({ message: "What is the count of rides for each day?" }))}>What is the count of rides for each day?</button>
                            </div>
                            <div className="chat-sample-question">
                                <button onClick={() => dispatch(sendMessage({ message: "What sort of data do you have?" }))}>What sort of data do you have?</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="chat-input">
                    <input
                        className="inpt-message"
                        type="text"
                        placeholder="Total Rides"
                        value={message}
                        onChange={(e) => dispatch(handleChangeMessage(e.target.value))}
                    />
                    <button className="btn-send" onClick={() => {
                        if (message) {
                            dispatch(sendMessage({ message }));
                        }
                        else {
                            console.log("Please add a message first!");
                        }
                    }} >
                        <PaperPlane fill="#FFF" width={25} height={25} />
                    </button>
                </div>
            </div>
            <Loading
            isLoading={chatLaoding}
            text={"Loading"}
            />
        </div>
    );
}

export default Chat;