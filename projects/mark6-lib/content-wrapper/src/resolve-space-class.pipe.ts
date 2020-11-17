import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ResolveSpaceClass',
})
export class ResolveSpaceClassPipe implements PipeTransform {
    transform(value: string): object {
        return ((value && value.split(' ')) || []).reduce((record, val) => {
            switch (val) {
                case 'all': {
                    record['padding'] = 0;
                    break;
                }
                case 'vertical': {
                    record['padding-top'] = record['padding-bottom'] = 0;
                    break;
                }
                case 'horizontal': {
                    record['padding-left'] = record['padding-right'] = 0;
                    break;
                }
                default: {
                    record['padding-' + val] = 0;
                    break;
                }
            }
            return record;
        }, {});
    }
}
