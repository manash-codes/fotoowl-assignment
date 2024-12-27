import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { getMessages } from "../hooks/useIntantDB";
import { message } from "../types";
import Header from "./Header";
import Message from "./Message";
import MessageField from "./MessageField";

const ChatWindow = () => {
    const { chatRoomID, recepient, user } = useContext(AppContext);
    const { data, isLoading, error } = getMessages(chatRoomID);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const isUserAndRecepientSet = user.id && recepient.id;

    return (
        <div className="chat-window-container">
            <Header />
            {isUserAndRecepientSet ? (
                <>
                    <Message messages={data.messages as message[]} recepientId={recepient.id} />
                    <MessageField chatRoomID={chatRoomID} recepientID={recepient.id} userID={user.id} />
                </>
            ) : (
                <div className="auth-info-container">
                    <h2>Let's Chat...</h2>
                    <p>1. Login using list at the bottom of Contact List {user.id && '✅'}</p>
                    <p>2. Select a contact to start a conversation {recepient.id && '✅'}</p>
                </div>
            )}
        </div>
    );
};

export default ChatWindow;

