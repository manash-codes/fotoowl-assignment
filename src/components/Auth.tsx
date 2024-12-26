import React from "react";
import { addContact } from "../hooks/useIntantDB";

const Auth = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const name = (target.elements.namedItem('name') as HTMLInputElement).value;
        const email = (target.elements.namedItem('email') as HTMLInputElement).value;

        if (!name || !email) {
            alert('Please fill all the fields')
        }

        addContact(email, name)
    }
    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit} className='create-user-form'>
                <h1>Create User</h1>
                <input className="input" name="name" type="text" placeholder="Enter your name" />
                <input className="input" name="email" type="email" placeholder="Enter your email" />
                <button className="submit-button" type="submit">Create</button>
            </form>

        </div>
    )
}

export default Auth