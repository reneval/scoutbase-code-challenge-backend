const movies = [
    {
        id: 1,
        title: "The Prestige",
        year: 2006,
        rating: 8.5,
        actors: [1, 2, 3],
        directors: [1] 
    },
    {
        id: 2,
        title: "Darkest hour",
        year: 2017,
        rating: 7.4,
        actors: [4, 5],
        directors: [2]
    },
]

const actors = [
    {
        id: 1,
        name: "Christian Bale",
        birthday: "January 30, 1974",
        country: "The UK"
    },
    {
        id: 2,
        name: "Hugh Jackman",
        birthday: "October 12, 1968",
        country: "Australia"
    },
    {
        id: 3,
        name: " Scarlett Johansson",
        birthday: "November 22, 1984",
        country: "The USA"
    },
    {
        id: 4,
        name: "Gary Oldman",
        birthday: "March 21, 1958",
        country: "The UK"
    },
    {
        id: 5,
        name: "Kristin Scott Thomas",
        birthday: "May 24, 1960",
        country: "The UK"
    },
]

const directors = [
    {
        id: 1,
        name: "Christopher Nolan",
        birthday: "July 30, 1970",
        country: "The UK"
    },
    {
        id: 2,
        name: "Joe Wright",
        birthday: "August 25, 1972",
        country: "The UK"
    },
]

module.exports = {
    movies,
    actors,
    directors
}