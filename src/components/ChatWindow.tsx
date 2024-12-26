import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { getMessages } from "../hooks/useIntantDB";
import message from "../types/message";
import Header from "./Header";
import Message from "./Message";
import MessageField from "./MessageField";

const ChatWindow = () => {
    const { chatRoomID, recepient, user } = useContext(AppContext);
    const { isLoading, error, data } = getMessages(chatRoomID);

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    const messages = data.messages as message[];

    return (
        <div className="chat-window-container">
            <Header />
            <Message messages={messages} recepientId={recepient.id} />
            <MessageField chatRoomID={chatRoomID} recepientID={recepient.id} userID={user.id} />
        </div>
    )
}

export default ChatWindow