console.log("Welcome to the Movies App!");

// define a movie
class Movie {

    constructor(id, title, year, rating, director) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.director = director;
    }

    toString() {
        return `Movie: ${this.title} (${this.year}), rated ${this.rating}, directed by ${this.director}`;
    }
}

var m1 = new Movie(1, 'Star Wars', 1977, 'PG', 'George Lucas');
var m2 = new Movie(2, 'Pulp Fiction', 1994, 'R', 'Quentin Tarantino');
var m3 = new Movie(3, 'Finding Nemo', 2003, 'G', 'Some director');

var movies = [m1, m2, m3];

for (m of movies) {
    console.log(m.toString());
}

console.log("Bye");