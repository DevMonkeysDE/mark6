import { Injectable } from '@angular/core';
import { MessengerInterface } from "../../../../projects/mark6-lib/messenger/src/messenger.interface";

@Injectable({
    providedIn: 'root'
})
export class MessengerDummyDataService {

    public dummyData: MessengerInterface[] = [
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'me',
            user_id: 1,
            user_name: 'Sven',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA6lBMVEXw8c/r0oDt5bDu46zmzoAmKTYjJjIeIi3q68rm58jqzbXkxa7p36vAkoDJlHywo3qFf3m1gG5PVGiBYFtBRVs3OkU4Lz9fQzwpLTnh4cLW17y/v6zYwafXvKLOxp7Iqpe/q5WpqJW+t5THopFwd4q2l4ibmoeglYdjbIa1mIWhmoTNvIKypoHfyYBdZoDbxXzJtny2qHvPuXqlhXpgZniffXFzcGVrZ2VtamRESWFnZFt6W1tkYVl0XFdgUVfdl1VJRVLSiU9dSU88P0x9U0UuLUXKeUS2b0JHNj8xNDxCNDVnRjQvJikXGydMl/xaAAAAhklEQVQI1y3HVRbDIBRF0VdIIO5Wd3d3d5v/dApZ3T/3Hkgw7ZY1ENjy6FR6jYkpxDFylp7jzfssECpdg+C0PuQQAoD0wx2Xp7sUcLJVVZR8XYaYlFHVbBL+CrrelPjBWCtubdutaRiDMJz5oWFcniuzCxtfFMPj/k3JeQHkS6LX/fahVIx+h3sNFhxamOcAAAAASUVORK5CYII=',
                src: 'assets/demo/avatar-male.jpg'
            },
            message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAzFBMVEWw2rKByISc0p+FyYj649XG0M/I1szCy8z21Mrd3MW5w8O/0rKZpqPTnp6azZupspWMy4+HuouBvn6GtXagmHHT5Nrn18+8xsjBxcbbysTLz8LuzL60u77rzL3oxr222by8urvlwrq2rrjVubWqs7TGzbGpsrGu1rC5zrDSqKnKuKW5p6Oc05+lmZixjZaZupWes5SOtZKKk5KqhpDKjY2XroyqkYyDwofJh4d8goZ/u4OExYKciYKNeIGEwX+JunuFmXiOq26LoWyGjWfV2iY6AAAAe0lEQVQI1zXNRRKFMBRE0eYFd/vu7u4u7H9PJAWcSdcdNSTu8YneYkWEJy/+RXl8+841/oc8iNzX4ejME5cIwGS1HswWHjLTnq63LeQMWTZQsFqNEYQlEW2e5y1xkJgfqOVaPfAZ/9mpZqXaNcelDsPFvtlNTVG04f6eAgJ/CeL/9fceAAAAAElFTkSuQmCC',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'What are you missing?'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAzFBMVEWw2rKByISc0p+FyYj649XG0M/I1szCy8z21Mrd3MW5w8O/0rKZpqPTnp6azZupspWMy4+HuouBvn6GtXagmHHT5Nrn18+8xsjBxcbbysTLz8LuzL60u77rzL3oxr222by8urvlwrq2rrjVubWqs7TGzbGpsrGu1rC5zrDSqKnKuKW5p6Oc05+lmZixjZaZupWes5SOtZKKk5KqhpDKjY2XroyqkYyDwofJh4d8goZ/u4OExYKciYKNeIGEwX+JunuFmXiOq26LoWyGjWfV2iY6AAAAe0lEQVQI1zXNRRKFMBRE0eYFd/vu7u4u7H9PJAWcSdcdNSTu8YneYkWEJy/+RXl8+841/oc8iNzX4ejME5cIwGS1HswWHjLTnq63LeQMWTZQsFqNEYQlEW2e5y1xkJgfqOVaPfAZ/9mpZqXaNcelDsPFvtlNTVG04f6eAgJ/CeL/9fceAAAAAElFTkSuQmCC',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'I think i know what i mean...'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'That is a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAzFBMVEWw2rKByISc0p+FyYj649XG0M/I1szCy8z21Mrd3MW5w8O/0rKZpqPTnp6azZupspWMy4+HuouBvn6GtXagmHHT5Nrn18+8xsjBxcbbysTLz8LuzL60u77rzL3oxr222by8urvlwrq2rrjVubWqs7TGzbGpsrGu1rC5zrDSqKnKuKW5p6Oc05+lmZixjZaZupWes5SOtZKKk5KqhpDKjY2XroyqkYyDwofJh4d8goZ/u4OExYKciYKNeIGEwX+JunuFmXiOq26LoWyGjWfV2iY6AAAAe0lEQVQI1zXNRRKFMBRE0eYFd/vu7u4u7H9PJAWcSdcdNSTu8YneYkWEJy/+RXl8+841/oc8iNzX4ejME5cIwGS1HswWHjLTnq63LeQMWTZQsFqNEYQlEW2e5y1xkJgfqOVaPfAZ/9mpZqXaNcelDsPFvtlNTVG04f6eAgJ/CeL/9fceAAAAAElFTkSuQmCC',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'me',
            user_id: 1,
            user_name: 'Sven',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA6lBMVEXw8c/r0oDt5bDu46zmzoAmKTYjJjIeIi3q68rm58jqzbXkxa7p36vAkoDJlHywo3qFf3m1gG5PVGiBYFtBRVs3OkU4Lz9fQzwpLTnh4cLW17y/v6zYwafXvKLOxp7Iqpe/q5WpqJW+t5THopFwd4q2l4ibmoeglYdjbIa1mIWhmoTNvIKypoHfyYBdZoDbxXzJtny2qHvPuXqlhXpgZniffXFzcGVrZ2VtamRESWFnZFt6W1tkYVl0XFdgUVfdl1VJRVLSiU9dSU88P0x9U0UuLUXKeUS2b0JHNj8xNDxCNDVnRjQvJikXGydMl/xaAAAAhklEQVQI1y3HVRbDIBRF0VdIIO5Wd3d3d5v/dApZ3T/3Hkgw7ZY1ENjy6FR6jYkpxDFylp7jzfssECpdg+C0PuQQAoD0wx2Xp7sUcLJVVZR8XYaYlFHVbBL+CrrelPjBWCtubdutaRiDMJz5oWFcniuzCxtfFMPj/k3JeQHkS6LX/fahVIx+h3sNFhxamOcAAAAASUVORK5CYII=',
                src: 'assets/demo/avatar-male.jpg'
            },
            message: 'I wish that this chat where a bit more awesome! Its cool allready, but it still dont handle every magic i need! <3'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAzFBMVEWw2rKByISc0p+FyYj649XG0M/I1szCy8z21Mrd3MW5w8O/0rKZpqPTnp6azZupspWMy4+HuouBvn6GtXagmHHT5Nrn18+8xsjBxcbbysTLz8LuzL60u77rzL3oxr222by8urvlwrq2rrjVubWqs7TGzbGpsrGu1rC5zrDSqKnKuKW5p6Oc05+lmZixjZaZupWes5SOtZKKk5KqhpDKjY2XroyqkYyDwofJh4d8goZ/u4OExYKciYKNeIGEwX+JunuFmXiOq26LoWyGjWfV2iY6AAAAe0lEQVQI1zXNRRKFMBRE0eYFd/vu7u4u7H9PJAWcSdcdNSTu8YneYkWEJy/+RXl8+841/oc8iNzX4ejME5cIwGS1HswWHjLTnq63LeQMWTZQsFqNEYQlEW2e5y1xkJgfqOVaPfAZ/9mpZqXaNcelDsPFvtlNTVG04f6eAgJ/CeL/9fceAAAAAElFTkSuQmCC',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'What are you missing?'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAzFBMVEWw2rKByISc0p+FyYj649XG0M/I1szCy8z21Mrd3MW5w8O/0rKZpqPTnp6azZupspWMy4+HuouBvn6GtXagmHHT5Nrn18+8xsjBxcbbysTLz8LuzL60u77rzL3oxr222by8urvlwrq2rrjVubWqs7TGzbGpsrGu1rC5zrDSqKnKuKW5p6Oc05+lmZixjZaZupWes5SOtZKKk5KqhpDKjY2XroyqkYyDwofJh4d8goZ/u4OExYKciYKNeIGEwX+JunuFmXiOq26LoWyGjWfV2iY6AAAAe0lEQVQI1zXNRRKFMBRE0eYFd/vu7u4u7H9PJAWcSdcdNSTu8YneYkWEJy/+RXl8+841/oc8iNzX4ejME5cIwGS1HswWHjLTnq63LeQMWTZQsFqNEYQlEW2e5y1xkJgfqOVaPfAZ/9mpZqXaNcelDsPFvtlNTVG04f6eAgJ/CeL/9fceAAAAAElFTkSuQmCC',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'I mean... What you think this messenger must have, that its better than most common messengers like the Facebook messenger?'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'I think i know what i mean...'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'A very big problem is that when this messenger window is max Scrolled bottom, and i enter something to the <textarea> that makes a linebreak because its a long message... Then it overlay the last message in the <messenger-history>'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'Thats a bit anoying... Because i everytime while writing a reply, must take my hand on the mouse and scroll this damn window down to see / remember what you wrote in your last message...'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 32),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'On the other hand, I do not want it scrolling down, for example, when I scrolled up in <messenger-history> to look something'
        },
        {
            created_at: this.getRandomDate(0, 0, 0, 0, 2),
            direction: 'others',
            user_id: 3,
            user_name: 'Lulu',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA9lBMVEWEwcuEv8q36eC26N+j2dig1tbu5cqcx8jfyLHAnpCzjYL23saPu8Lv1b6psrHawqugrqu2oZl2hI6+kIWtgXqpf3ijeXZySU9SLz614di03NSy3NOz1c3v38eDuseJvMV/s8Xq38SVvcOgw8Kqx8CtwL+NuL97ob+ivL6TuL7l173jzbijvbjbyrK0tbDdxKy4qqLTtKGToaF5dZ/LsZ2QnZ3MpZl+lJihkpaFkZO5mY+VhY59c46xkomslYanh4SIfYCdf3u0gXmsfHSFe3Gld2+GdGyNa2p/YmWWZ2SWZmN2WWB9Wl5nX1tiRE9rRU1pQEhVOEfyiC8/AAAAjklEQVQI1xXNRRYCQRAD0KLpHnfH3d3d3eH+l6Emm7y/SSCCUTStFjZEAPKm622qgEF2JVGUzAyCUt6Zc9zwVKAUoqR5dxsp6VYkBDH6Oqo89vshEtvgosqr4JpExI3fR+z5byNGgDHeehz2T4tnDPeUyc62vVk5/CkJZ10QOmu9nYbsYPFq5bj6cbqs/AGTuw58pQ6SpQAAAABJRU5ErkJggg==',
                src: 'assets/demo/avatar-female.jpg'
            },
            message: 'Thats really a complicated thing... Maybe thats why the Facebookmessenger dont have this functionality? Because its simply not possible?'
        },
        {
            created_at: new Date(),
            direction: 'others',
            user_id: 2,
            user_name: 'ShyGuy',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAzFBMVEWw2rKByISc0p+FyYj649XG0M/I1szCy8z21Mrd3MW5w8O/0rKZpqPTnp6azZupspWMy4+HuouBvn6GtXagmHHT5Nrn18+8xsjBxcbbysTLz8LuzL60u77rzL3oxr222by8urvlwrq2rrjVubWqs7TGzbGpsrGu1rC5zrDSqKnKuKW5p6Oc05+lmZixjZaZupWes5SOtZKKk5KqhpDKjY2XroyqkYyDwofJh4d8goZ/u4OExYKciYKNeIGEwX+JunuFmXiOq26LoWyGjWfV2iY6AAAAe0lEQVQI1zXNRRKFMBRE0eYFd/vu7u4u7H9PJAWcSdcdNSTu8YneYkWEJy/+RXl8+841/oc8iNzX4ejME5cIwGS1HswWHjLTnq63LeQMWTZQsFqNEYQlEW2e5y1xkJgfqOVaPfAZ/9mpZqXaNcelDsPFvtlNTVG04f6eAgJ/CeL/9fceAAAAAElFTkSuQmCC',
                src: 'assets/demo/avatar-diverse.jpg'
            },
            message: 'That make sense... But dont worry, we are awesome! WE FIND A WAY! ;)'
        }
    ];

    constructor() {
    }

    public getDummyData() {
        return this.dummyData;
    }
    private getRandomDate(substractYears?: number, substractMonths?: number, substractDays?: number, substractHours?: number, substractMinutes?: number) {
        const d = new Date();
        if (substractYears) { d.setFullYear(d.getFullYear() - substractYears); }
        if (substractMonths) { d.setMonth(d.getMonth() - substractMonths); }
        if (substractDays) { d.setDate(d.getDate() - substractDays); }
        if (substractHours) { d.setHours(d.getHours() - substractHours); }
        if (substractMinutes) { d.setMinutes(d.getMilliseconds() - substractMinutes); }
        console.log(d);

        return d;
    }

}
