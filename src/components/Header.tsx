import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { getAvatarIcon } from "../utils";

const Header = () => {
    const { recepient } = useContext(AppContext);

    const SelectContactMessage = (
        <div className="heading">Select a contact to start a conversation</div>
    )

    const ContactCard = (
        <div className="header">
            <img className="avatar" src={getAvatarIcon(recepient.name)} alt={`${recepient.name} + avatar`} />
            <div className="username">{recepient.name}</div>
        </div>
    )

    return (
        <div className="header-container">
            {recepient.id ? ContactCard : SelectContactMessage}
        </div>
    )
}

export default Header