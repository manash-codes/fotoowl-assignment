import message from "../types/message"

type MessageProps = {
    messages: message[]
    recepientId: string
}

const Message = ({ messages, recepientId }: MessageProps) => {
    return (
        <div className="message">
            {messages.map((message: message) =>
                <div key={message.id} className={`card ${message.receiverID === recepientId ? 'sender' : ''}`}>
                    <div className='message-container'>
                        {message.text}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Message