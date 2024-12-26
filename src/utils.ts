export const getChatroomID = (sender: string, receiver: string): string =>
    sender > receiver ? sender + receiver : receiver + sender;

export const getAvatarIcon = (name: string): string => {
    return `https://eu.ui-avatars.com/api/?name=${name}&size=250`;
};