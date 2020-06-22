import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerDummyDataService {

  dummyData = [
    {
      direction: 'me', // Required
      user_id: 1, // Required
      user: 'Sven', // Optional
      avatar: 'https://sven.budak.info/assets/images/me.jpg', // Optional
      message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 2, // Required
      user: 'Hannes', // Optional
      avatar: 'https://goo.gl/MM4sKH', // Optional
      message: 'What are you missing?' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 2, // Required
      user: 'Hannes', // Optional
      avatar: 'https://goo.gl/MM4sKH', // Optional
      message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'I think i know what i mean...' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>' // Optional
    },
    {
      direction: 'others', // Requiredhttps://goo.gl/MM4sKH
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'Thats a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 2, // Required
      user: 'Hannes', // Optional
      avatar: 'https://goo.gl/MM4sKH', // Optional
      message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)' // Optional
    },
    {
      direction: 'me', // Required
      user_id: 1, // Required
      user: 'Sven', // Optional
      avatar: 'https://sven.budak.info/assets/images/me.jpg', // Optional
      message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 2, // Required
      user: 'Hannes', // Optional
      avatar: 'https://goo.gl/MM4sKH', // Optional
      message: 'What are you missing?' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 2, // Required
      user: 'Hannes', // Optional
      avatar: 'https://goo.gl/MM4sKH', // Optional
      message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'I think i know what i mean...' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'Thats a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 3, // Required
      user: 'Otto', // Optional
      avatar: 'https://goo.gl/iiGHQL', // Optional
      message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?' // Optional
    },
    {
      direction: 'others', // Required
      user_id: 2, // Required
      user: 'Hannes', // Optional
      avatar: 'https://goo.gl/MM4sKH', // Optional
      message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)' // Optional
    }
  ];

  constructor() { }

  getDummyData() {
    return this.dummyData;
  }

}
