console.log('Welcome to the movie app!');

class Movie {
    // id;
    // title;
    // year;
    // rating;
    // director;

    constructor(id, title, year, rating, director) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.director = director;
    }

    display() {
        return `id = ${this.id}, title = ${this.title}, year=${this.year}, rating = `+
            `${this.rating}, director = ${this.director}`;
    }
}

m = new Movie(1,'test', 1977, 'PG', 'test');
console.log(m.display());