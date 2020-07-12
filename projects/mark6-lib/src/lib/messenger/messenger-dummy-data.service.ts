import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessengerDummyDataService {

    public dummyData = [
        {
            createdAt: '1592821389970', // Required
            direction: 'me', // Required
            userId: 1, // Required
            userName: 'Sven', // Optional
            avatar: 'https://sven.budak.info/assets/images/me.jpg', // Optional
            message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3' // Optional
        },
        {
            createdAt: '1592821452407', // Required
            direction: 'others', // Required
            userId: 2, // Required
            userName: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'What are you missing?' // Optional
        },
        {
            createdAt: '1592821460031', // Required
            direction: 'others', // Required
            userId: 2, // Required
            userName: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?' // Optional
        },
        {
            createdAt: '1592821467605', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'I think i know what i mean...' // Optional
        },
        {
            createdAt: '1592821473552', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>' // Optional
        },
        {
            createdAt: '1592821477322', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'Thats a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...' // Optional
        },
        {
            createdAt: '1592821480838', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something' // Optional
        },
        {
            createdAt: '1592821484330', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?' // Optional
        },
        {
            createdAt: '1592821487574', // Required
            direction: 'others', // Required
            userId: 2, // Required
            userName: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)' // Optional
        },
        {
            createdAt: '1592821490899', // Required
            direction: 'me', // Required
            userId: 1, // Required
            userName: 'Sven', // Optional
            avatar: 'https://sven.budak.info/assets/images/me.jpg', // Optional
            message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3' // Optional
        },
        {
            createdAt: '1592821494033', // Required
            direction: 'others', // Required
            userId: 2, // Required
            userName: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'What are you missing?' // Optional
        },
        {
            createdAt: '1592821496833', // Required
            direction: 'others', // Required
            userId: 2, // Required
            userName: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?' // Optional
        },
        {
            createdAt: '1592821499985', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'I think i know what i mean...' // Optional
        },
        {
            createdAt: '1592821502571', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>' // Optional
        },
        {
            createdAt: '1592821507499', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'Thats a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...' // Optional
        },
        {
            createdAt: '1592821510532', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something' // Optional
        },
        {
            createdAt: '1592821512887', // Required
            direction: 'others', // Required
            userId: 3, // Required
            userName: 'Otto', // Optional
            avatar: 'https://goo.gl/iiGHQL', // Optional
            message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?' // Optional
        },
        {
            createdAt: '1592821517326', // Required
            direction: 'others', // Required
            userId: 2, // Required
            userName: 'Hannes', // Optional
            avatar: 'https://goo.gl/MM4sKH', // Optional
            message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)' // Optional
        }
    ];

    constructor() {
    }

    getDummyData() {
        return this.dummyData;
    }

}
