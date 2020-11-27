import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Mark6MessengerService {
    private _maxHeight = new BehaviorSubject<number>(100);
    constructor() { }
    public getMaxHeight() {
        return this._maxHeight.asObservable();
    }
    public newItemHeight(height: number) {
        if (height > this._maxHeight.value)
            this._maxHeight.next(height);
    }
}
