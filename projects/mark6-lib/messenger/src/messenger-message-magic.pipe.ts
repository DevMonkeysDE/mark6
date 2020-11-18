import { Pipe, PipeTransform } from '@angular/core';
import { getCssClasses, getFormat, samePeriod, test } from './messenger.helper';
import { InternalMessengerInterface, MessengerInterface } from './messenger.interface';

@Pipe({
    name: 'magicPipe'
})
export class MessengerMessageMagicPipe implements PipeTransform {

    transform(messages: MessengerInterface[]) {
        test();


        for (let index = 0; index < messages.length; index++) {


            const previousMessage = index === 0 ? null : messages[index - 1] as InternalMessengerInterface;
            const nextMessage = index === messages.length - 1 ? null : messages[index + 1] as InternalMessengerInterface;



            const firstMessage = index === 0;
            const lastMessage = index === messages.length - 1;

            const message = messages[index] as InternalMessengerInterface;

            message.showDate = firstMessage || !samePeriod(previousMessage.created_at, message.created_at);
            message.showTimestamp = false;
            message.firstMessage = firstMessage;
            message.lastMessage = lastMessage;
            message.classes = getCssClasses(message, previousMessage, nextMessage);
        }
        return messages as InternalMessengerInterface[] ;
    }


}
