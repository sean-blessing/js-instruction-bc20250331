export class Movie {
    id;
    title;
    year;
    rating;
    director;

    constructor(id, title, year, rating, director) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.director = director;
    }

    display() {
        return `id = ${this.id}, title = ${this.title}`
    }
}