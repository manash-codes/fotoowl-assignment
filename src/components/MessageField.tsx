import { addMessage } from "../hooks/useIntantDB";

type MessageFieldProps = {
    userID: string,
    recepientID: string,
    chatRoomID: string,
}

const MessageField = ({ userID, recepientID, chatRoomID }: MessageFieldProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const message = (target.elements.namedItem('message') as HTMLInputElement).value;

        if (!message) {
            alert('Please enter a message')
        }

        addMessage(message, userID, recepientID, chatRoomID);

        target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="message-field-container">
            <input className="message-input" name="message" type="text" placeholder="Enter message" />
            <button type="submit" className="send-button">Send</button>
        </form>
    )
}

export default MessageField