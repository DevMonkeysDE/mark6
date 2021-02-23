import { Injectable } from '@angular/core';
import { MessengerInterface } from "../../../../projects/mark6-lib/messenger/src/messenger.interface";
import * as txtgen from 'txtgen';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class MessengerDummyDataService {

    private sven = {
        direction: 'me',
        user_id: 1,
        user_name: 'Sven',
        user_avatar: {
            preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA6lBMVEXw8c/r0oDt5bDu46zmzoAmKTYjJjIeIi3q68rm58jqzbXkxa7p36vAkoDJlHywo3qFf3m1gG5PVGiBYFtBRVs3OkU4Lz9fQzwpLTnh4cLW17y/v6zYwafXvKLOxp7Iqpe/q5WpqJW+t5THopFwd4q2l4ibmoeglYdjbIa1mIWhmoTNvIKypoHfyYBdZoDbxXzJtny2qHvPuXqlhXpgZniffXFzcGVrZ2VtamRESWFnZFt6W1tkYVl0XFdgUVfdl1VJRVLSiU9dSU88P0x9U0UuLUXKeUS2b0JHNj8xNDxCNDVnRjQvJikXGydMl/xaAAAAhklEQVQI1y3HVRbDIBRF0VdIIO5Wd3d3d5v/dApZ3T/3Hkgw7ZY1ENjy6FR6jYkpxDFylp7jzfssECpdg+C0PuQQAoD0wx2Xp7sUcLJVVZR8XYaYlFHVbBL+CrrelPjBWCtubdutaRiDMJz5oWFcniuzCxtfFMPj/k3JeQHkS6LX/fahVIx+h3sNFhxamOcAAAAASUVORK5CYII=',
            src: 'assets/demo/avatar-male.jpg'
        }
    };

    private shyGuy = {
        direction: 'others',
        user_id: 2,
        user_name: 'ShyGuy',
        user_avatar: {
            preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAzFBMVEWw2rKByISc0p+FyYj649XG0M/I1szCy8z21Mrd3MW5w8O/0rKZpqPTnp6azZupspWMy4+HuouBvn6GtXagmHHT5Nrn18+8xsjBxcbbysTLz8LuzL60u77rzL3oxr222by8urvlwrq2rrjVubWqs7TGzbGpsrGu1rC5zrDSqKnKuKW5p6Oc05+lmZixjZaZupWes5SOtZKKk5KqhpDKjY2XroyqkYyDwofJh4d8goZ/u4OExYKciYKNeIGEwX+JunuFmXiOq26LoWyGjWfV2iY6AAAAe0lEQVQI1zXNRRKFMBRE0eYFd/vu7u4u7H9PJAWcSdcdNSTu8YneYkWEJy/+RXl8+841/oc8iNzX4ejME5cIwGS1HswWHjLTnq63LeQMWTZQsFqNEYQlEW2e5y1xkJgfqOVaPfAZ/9mpZqXaNcelDsPFvtlNTVG04f6eAgJ/CeL/9fceAAAAAElFTkSuQmCC',
            src: 'assets/demo/avatar-diverse.jpg'
        }
    };

    private luLu = {
        direction: 'others',
        user_id: 3,
        user_name: 'Lulu',
        user_avatar: {
            preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
            src: 'assets/demo/avatar-female.jpg'
        }
    };

    private randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    private randomKey() {
        return Math.floor(Math.random());
    }

    public get dummyData(): MessengerInterface[] {
        const result = [];
        for (let index = 0; index < 50; index++) {
            const rnd = this.randomIntFromInterval(1, 3);
            const user = rnd === 1 ? this.sven : rnd === 3 ? this.shyGuy : this.luLu;
            result.push({
                ...user,
                created_at: this.getRandomDate(),
                message: txtgen.sentence(),
                key: this.randomKey()
            });

        }
        for (let index = 0; index < 50; index++) {
            const rnd = this.randomIntFromInterval(1, 3);
            const user = rnd === 1 ? this.sven : rnd === 3 ? this.shyGuy : this.luLu;
            result.push({
                ...user,
                created_at: this.getRandomDateForThisWeek(),
                message: txtgen.sentence(),
                key: this.randomKey()
            });

        }
        return [].concat(result || []).sort((n1, n2) => {
            if (n1.created_at > n2.created_at) {
                return 1;
            }

            if (n1.created_at < n2.created_at) {
                return -1;
            }

            return 0;
        })
    }



    constructor() {
    }

    public getDummyData() {
        return this.dummyData;
    }
    private getRandomDate() {

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDate = new Date().getDate();
        const currentHours = new Date().getHours();
        const currentMinutes = new Date().getMinutes();
        const currentSeconds = new Date().getSeconds();
        const randomYear = this.randomIntFromInterval((currentYear - 1), currentYear);

        const randomMonth = this.randomIntFromInterval(1, currentYear === randomYear ? currentMonth : 12);
        const randomDay = this.randomIntFromInterval(1, currentMonth === randomMonth ? currentDate : 28);
        const randomHours = this.randomIntFromInterval(0, currentDate === randomDay ? currentHours : 24);
        const randomMinutes = this.randomIntFromInterval(0, currentHours === randomHours ? currentMinutes : 60);
        const randomSeconds = this.randomIntFromInterval(0, currentMinutes === randomMinutes ? currentSeconds : 60);


        const d = new Date(randomYear, randomMonth, randomDay, randomHours, randomMinutes, randomSeconds);
        return d;

    }
    private getRandomDateForThisWeek() {

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDate = new Date().getDate();
        const currentHours = new Date().getHours();
        const currentMinutes = new Date().getMinutes();
        const currentSeconds = new Date().getSeconds();
        const randomYear = this.randomIntFromInterval((currentYear), currentYear);

        const randomMonth = this.randomIntFromInterval(currentMonth, currentMonth);
        const randomDay = this.randomIntFromInterval(1, currentDate);
        const randomHours = this.randomIntFromInterval(0, currentDate === randomDay ? currentHours : 24);
        const randomMinutes = this.randomIntFromInterval(0, currentHours === randomHours ? currentMinutes : 60);
        const randomSeconds = this.randomIntFromInterval(0, currentMinutes === randomMinutes ? currentSeconds : 60);


        const d = new Date(randomYear, randomMonth, randomDay, randomHours, randomMinutes, randomSeconds);
        return d;

    }
}
