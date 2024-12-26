import React, { createContext, useReducer } from "react";
import contact from "../types/contacts";
import message from "../types/message";

interface AppContextType {
    contacts: contact[] | [];
    messages: message[] | [];
    user: contact;
    recepient: contact;
    chatRoomID: string;
    dispatch: React.Dispatch<Action>;
}

export enum AppActionTypes {
    SET_CONTACTS = 'SET_CONTACTS',
    SET_MESSAGES = 'SET_MESSAGES',
    SET_USER = 'SET_USER',
    SET_RECEPIENT = 'SET_RECEPIENT',
    SET_CHATROOM_ID = 'SET_CHATROOM_ID',
}

interface SetContactsAction {
    type: AppActionTypes.SET_CONTACTS;
    payload: contact[];
}

interface SetMessagesAction {
    type: AppActionTypes.SET_MESSAGES;
    payload: message[];
}

interface SetUserAction {
    type: AppActionTypes.SET_USER;
    payload: contact;
}

interface SetRecepientAction {
    type: AppActionTypes.SET_RECEPIENT;
    payload: contact;
}

interface SetChatRoomIDAction {
    type: AppActionTypes.SET_CHATROOM_ID;
    payload: string;
}

type Action = SetContactsAction | SetMessagesAction | SetUserAction | SetRecepientAction | SetChatRoomIDAction;

const initialState: AppContextType = {
    contacts: [],
    messages: [],
    user: {} as contact,
    recepient: {} as contact,
    chatRoomID: '',
    dispatch: () => undefined,
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const appReducer = (state: AppContextType, action: Action): AppContextType => {
        switch (action.type) {
            case AppActionTypes.SET_CONTACTS:
                return { ...state, contacts: action.payload };
            case AppActionTypes.SET_MESSAGES:
                return { ...state, messages: action.payload };
            case AppActionTypes.SET_USER:
                return { ...state, user: action.payload };
            case AppActionTypes.SET_RECEPIENT:
                return { ...state, recepient: action.payload };
            case AppActionTypes.SET_CHATROOM_ID:
                return { ...state, chatRoomID: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
