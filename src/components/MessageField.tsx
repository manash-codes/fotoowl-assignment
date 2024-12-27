import { useRef } from "react";
import { addMessage } from "../hooks/useIntantDB";

type MessageFieldProps = {
    userID: string,
    recepientID: string,
    chatRoomID: string,
}

const MessageField = ({ recepientID, chatRoomID }: MessageFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = inputRef.current?.value.trim();

        if (!message) {
            alert('Please enter a message')
            return;
        }

        addMessage(message, recepientID, chatRoomID);

        inputRef.current!.value = '';
    }

    return (
        <form onSubmit={handleSubmit} className="message-field-container">
            <input className="message-input" ref={inputRef} type="text" placeholder="Enter message" />
            <button type="submit" className="send-button">Send</button>
        </form>
    )
}

export default MessageField
