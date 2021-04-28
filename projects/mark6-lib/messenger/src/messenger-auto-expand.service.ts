import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Mark6MessengerAutoExpandService {
    public animate = new Subject<void>();
    constructor() { }

}