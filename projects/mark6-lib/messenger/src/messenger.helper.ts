import { InternalMessengerInterface } from "./messenger.interface";

export const test = () => {
    return 'test';
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


export const getFormat = (d: Date) => {
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));
    if (Number.isNaN(seconds)) {
        return '';
    } else if (seconds <= 45) {
        return `few seconds ago`;
    } else if (seconds <= 90) {
        return `a minute ago`;
    } else if (minutes <= 45) {
        return `${minutes} minutes ago`;
    } else if (minutes <= 90) {
        return `a hour ago`;
    } else if (hours <= 22) {
        return `${hours} hours ago`;
    } else if (hours <= 36) {
        return `a day ago`;
    } else if (days <= 25) {
        return `${days} days ago`;
    } else if (days <= 45) {
        return `a month ago`;
    } else if (days <= 345) {
        return `${months} months ago`;
    } else if (days <= 545) {
        return `a year ago`;
    } else { // (days > 545)
        return `${years} years ago`;
    }
}
export const samePeriod = (d1: Date, d2: Date) => {
    return sameDay(d1, d2) ||
        sameMonth(d1, d2) ||
        sameYear(d1, d2)
        ;
}
const sameMonth = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth();
}
const sameYear = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear();
}
const sameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}


const getSecondsUntilUpdate = (seconds: number) => {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;
    if (seconds < min) { // less than 1 min, update every 2 secs
        return 2;
    } else if (seconds < hr) { // less than an hour, update every 30 secs
        return 30;
    } else if (seconds < day) { // less then a day, update every 5 mins
        return 300;
    } else { // update every hour
        return 3600;
    }
}