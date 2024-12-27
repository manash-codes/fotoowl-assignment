export interface contact {
    id: string;
    name: string;
    email: string;
}

export interface message {
    id: string;
    text: string;
    chatRoomID: string;
    receiverID: string;
    createdAt: Date;
}