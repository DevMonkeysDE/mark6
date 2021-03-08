
export interface MessengerMessageBlockInterface {
    date: Date;
    messageGroup: MessengerMessageGroupInterface[];
}

export interface MessengerMessageGroupInterface {
    type: string;
    user_id?: any;
    user_name?: string;
    user_avatar?: AvatarInterface;
    messages?: MessengerMessageInterface[];
}

export interface AvatarInterface {
    preview?: string;
    src?: string;
    srcset?: string;
    default?: string;
}

export interface MessengerMessageInterface {
    created_at?: Date;
    text: string;
    reply?: MessengerReplyInterface;
    user_name: string;
}

export interface MessengerReplyInterface {
    user_name: string;
    text: string;
    color?: string;
}