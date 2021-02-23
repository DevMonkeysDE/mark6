import { InternalMessengerInterface, MessengerInterface } from "./messenger.interface";


export const transform = (messages: MessengerInterface[]) => {

    if (!!!messages) return null;
    for (let index = 0; index < messages.length; index++) {


        const previousMessage = index === 0 ? null : messages[index - 1] as InternalMessengerInterface;
        const nextMessage = index === messages.length - 1 ? null : messages[index + 1] as InternalMessengerInterface;



        const firstMessage = index === 0;
        const lastMessage = index === messages.length - 1;

        const message = messages[index] as InternalMessengerInterface;

        message.showDate = firstMessage || isDifferentDate(message.created_at, previousMessage.created_at);
        message.showTimestamp = false;
        message.firstMessage = firstMessage;
        message.lastMessage = lastMessage;
        message.classes = getCssClasses(message, previousMessage, nextMessage);
    }
    return messages as InternalMessengerInterface[];
}

export const getCssClasses =
    (
        message: InternalMessengerInterface,
        previousMessage: InternalMessengerInterface,
        nextMessage: InternalMessengerInterface
    ) => new Object({
        me: message.direction === 'me',
        others: message.direction === 'others',
        msg: true,
        message: true,
        'first-message-this-day': message.showDate,
        'first-from-direction': (previousMessage && (previousMessage.direction !== message.direction)) || message.firstMessage,
        'first-from-user': (previousMessage && (previousMessage.user_id !== message.user_id)) || message.firstMessage,
        'last-from-direction': (nextMessage && (nextMessage.direction !== message.direction)) || message.lastMessage,
        'last-from-user': (nextMessage && (nextMessage.user_id !== message.user_id)) || message.lastMessage
    });


export const getDiffDaysFromNow = (date: Date) => {
    const d = new Date();
    const diff = Math.abs(d.getTime() - date.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    return diffDays;
}


export const isDifferentDate = (currentDate: Date, previousDate: Date) => {
    if (!!!currentDate || !!!previousDate) { return false; }
    const c = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`;
    const p = `${previousDate.getFullYear()}-${previousDate.getMonth()}-${previousDate.getDay()}`;
    return c !== p;
}
