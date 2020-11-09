import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'mergeStringToRecord',
})
export class MergeStringToRecordPipe implements PipeTransform {

    transform(value: string, prefix = '', suffix = '', separator = ' '): Record<string, string> {
        return ((value && value.split(separator).map(val => prefix + val)) || []).reduce((record, prefixedValue) => {
            record[prefixedValue] = suffix;
            return record;
        }, {});
    }

}
