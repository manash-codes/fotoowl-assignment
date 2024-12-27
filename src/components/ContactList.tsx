import { useContext, useEffect } from "react";
import { AppActionTypes, AppContext } from "../contexts/AppContext";
import { getContacts } from "../hooks/useIntantDB";
import { contact } from "../types";
import { getAvatarIcon, getChatroomID } from "../utils";

const ContactList = () => {
    const { isLoading, error, data } = getContacts();
    const { dispatch, user, recepient } = useContext(AppContext);

    useEffect(() => {
        if (user.id && recepient.id) {
            dispatch({ type: AppActionTypes.SET_CHATROOM_ID, payload: getChatroomID(user.id, recepient.id) });
        }
    }, [user.id, recepient.id, dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const contacts = data.users as contact[];

    const handleSetSender = (contactId: string) => {
        const contact = contacts.find(contact => contact.id === contactId);
        if (contact) {
            dispatch({ type: AppActionTypes.SET_USER, payload: contact });
        }
    };

    const handleSetRecipient = (contact: contact) => {
        dispatch({ type: AppActionTypes.SET_RECEPIENT, payload: contact });
    };

    return (
        <div className="container contact-list-container">
            <div className="heading-wrapper">
                <h2 className="heading">Contact List</h2>
            </div>
            <div className="border" />
            <div className="contact-list">
                {contacts.map(contact => (
                    <div
                        key={contact.id}
                        className={`contact-card ${contact.id === recepient.id ? 'active' : ''}`}
                        onClick={() => handleSetRecipient(contact)}
                    >
                        <img className="avatar" src={getAvatarIcon(contact.name)} alt={`${contact.name} avatar`} />
                        <div className="contact-info">
                            <p className="name">{contact.name}</p>
                            <span className="subtext">{contact.email}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border" />
            <div className="contact-card">
                <p>You're logged in as</p>
                <select onChange={e => handleSetSender(e.target.value)} defaultValue="">
                    <option value="">Select a contact</option>
                    {contacts.map(contact => (
                        <option key={contact.id} value={contact.id}>
                            {contact.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ContactList;
