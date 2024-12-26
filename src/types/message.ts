export default interface message {
    id: string;
    text: string;
    chatRoomID: string;
    senderID: string;
    receiverID: string;
    createdAt: Date;
}