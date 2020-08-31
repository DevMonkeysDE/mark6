export interface MessengerInterface {
    created_at: Date;
    direction: 'others' | 'me';
    user_id: number;
    user_name?: string;
    user_avatar?: AvatarInterface;
    message: string;
    message_sent?: boolean;
}

export interface AvatarInterface {
    preview?: string;
    src?: string;
    srcset?: string;
    default?: string;
}
