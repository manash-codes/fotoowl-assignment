import { id, init } from '@instantdb/react';

const APP_ID = import.meta.env.VITE_INSTANT_APP_ID as string;
const db = init({ appId: APP_ID });

const addContact = (email: string, name: string) => {
    db.transact(
        db.tx.users[id()].update({
            name,
            email
        })
    )
}

const addMessage = (text: string, receiverID: string, chatRoomID: string) => {
    db.transact(
        db.tx.messages[id()].update({
            text,
            receiverID,
            chatRoomID,
            createdAt: new Date()
        })
    )
}

const getContacts = () => {
    return db.useQuery({ users: {} });
}

const getMessages = (chatRoomID: string) => {
    return db.useQuery({
        messages: {
            $: {
                where: {
                    chatRoomID
                }
            }
        }
    });
}

export { getContacts, getMessages, addContact, addMessage };
