import {Injectable} from '@angular/core';
import {MessengerInterface} from "../../../../projects/mark6-lib/src/lib/messenger/messenger.interface";

@Injectable({
    providedIn: 'root'
})
export class MessengerDummyDataService {

    public dummyData: MessengerInterface[] = [
        {
            created_at: new Date(1592821389970),
            direction: 'me',
            user_id: 1,
            user_name: 'Sven',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-male.jpg'
            },
            message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3'
        },
        {
            created_at: new Date(1592821452407),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'What are you missing?'
        },
        {
            created_at: new Date(1592821460031),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?'
        },
        {
            created_at: new Date(1592821467605),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'I think i know what i mean...'
        },
        {
            created_at: new Date(1592821473552),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>'
        },
        {
            created_at: new Date(1592821477322),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'That is a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...'
        },
        {
            created_at: new Date(1592821480838),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something'
        },
        {
            created_at: new Date(1592821484330),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?'
        },
        {
            created_at: new Date(1592821487574),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)'
        },
        {
            created_at: new Date(1592821490899),
            direction: 'me',
            user_id: 1,
            user_name: 'Sven',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-male.jpg'
            },
            message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3'
        },
        {
            created_at: new Date(1592821494033),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'What are you missing?'
        },
        {
            created_at: new Date(1592821496833),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?'
        },
        {
            created_at: new Date(1592821499985),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'I think i know what i mean...'
        },
        {
            created_at: new Date(1592821502571),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>'
        },
        {
            created_at: new Date(1592821507499),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'Thats a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...'
        },
        {
            created_at: new Date(1592821510532),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something'
        },
        {
            created_at: new Date(1592821512887),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?'
        },
        {
            created_at: new Date(1592821517326),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'anybase64 or url',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)'
        }
    ];

    constructor() {
    }

    getDummyData() {
        return this.dummyData;
    }

}
