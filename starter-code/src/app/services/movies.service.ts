import { Injectable } from '@angular/core';


@Injectable()
export class MoviesService {

    moviesArray : Array<Object> = [        
    {
        id: 1,
        title: "aaa",
        poster: "aaa",
        synopsis: "aaa",
        genres: ["aaa"],
        year:2010,
        director:"aaa",
        actors: ["aaa"],
        hours:["aaa"],
        room: 1
        },
        {
            id: 2,
            title: "bbb",
            poster: "bbb",
            synopsis: "bbb",
            genres: ["bbb"],
            year:2010,
            director:"bbb",
            actors: ["bbb"],
            hours:["bbb"],
            room: 1
            }
    ];

    constructor() { }

    getMovies(){
        return this.moviesArray;
    }

    getMovie(id){
      // return this.moviesArray.filter(m => m.id ==id);
    }

    increment() {

    }
}