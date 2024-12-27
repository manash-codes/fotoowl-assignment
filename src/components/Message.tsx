import { message } from "../types"

type MessageProps = {
    messages: message[]
    recepientId: string
}

const Message = ({ messages, recepientId }: MessageProps) => {

    if (messages.length === 0) {
        return <div className="auth-info-container">
            <h2>Let's Chat...</h2>
        </div>
    }

    return (
        <div className="message">
            {messages.map(({ id, receiverID, text }) => (
                <div key={id} className={`card ${receiverID === recepientId ? 'sender' : ''}`}>
                    <div className='message-container'>{text}</div>
                </div>
            ))}
        </div>
    )
}

export default Message