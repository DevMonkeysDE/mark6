import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs'; // Observable is required because build task throws otherwise errors.


@Injectable({
    providedIn: 'root'
})
export class Mark6DropDownService {

    // Observable string sources
    private subject = new Subject();

    close(target) {
        this.subject.next(target);
    }

    getState() {
        return this.subject.asObservable();
    }

}
