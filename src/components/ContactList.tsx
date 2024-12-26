import { useContext } from "react";
import { AppActionTypes, AppContext } from "../contexts/AppContext";
import { getContacts, addContact } from "../hooks/useIntantDB";
import contact from "../types/contacts";
import { getAvatarIcon, getChatroomID } from "../utils";

const ContactList = () => {
    const { isLoading, error, data } = getContacts();
    const { dispatch, user, recepient } = useContext(AppContext);

    const action = AppActionTypes;

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    const contacts = data.users as contact[];

    const handleSetSender = (contactId: string) => {
        const contact = contacts.find(contact => contact.id === contactId);
        console.log('contact', contact)
        if (contact) {
            dispatch({ type: action.SET_USER, payload: contact });
        }
    }

    const handleSetRecipient = (contact: contact) => {
        console.log('Rcontact', contact)

        dispatch({ type: action.SET_RECEPIENT, payload: contact });
        dispatch({ type: action.SET_CHATROOM_ID, payload: getChatroomID(user.id, contact.id) });
    }

    return (
        <div className="container contact-list-container">
            <div className="heading-wrapper">
                <h2 className="heading">Contact List</h2>
                <button onClick={() => addContact('arpit@gmail.com', 'Arpit')}>Add</button>
            </div>
            <div className="border" />
            <div className="contact-list">
                {contacts.map((contact: contact) =>
                    <div onClick={() => handleSetRecipient(contact)} key={contact.id} className={`contact-card ${contact.id === recepient.id ? 'active' : ''}`}>
                        <img className="avatar" src={getAvatarIcon(contact.name)} alt={`${contact.name} + avatar`} />
                        <div className="contact-info">
                            <p className="name">{contact.name}</p>
                            <span className="subtext">{contact.email}</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="border" />

            <div className="contact-card">
                <p>You're logged in as</p>
                <select name="contacts" id="contacts" onChange={(e) => handleSetSender(e.target.value)}>
                    <option value={""}>
                        Select a contact
                    </option>

                    {contacts.map((contact: contact) =>
                        <option key={contact.id} value={contact.id}>
                            {contact.name}
                        </option>
                    )}
                </select>
            </div>
        </div >
    )
}

export default ContactList