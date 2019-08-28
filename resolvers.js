const R = require('ramda')


module.exports = {
  Query: {
    movies: (_, __, { store }) => store.getAllMovies(),
    movie: (_, { id}, { store }) => store.getMovieById({ movieId: id }),
    me: (_, __, { dataSources }) => dataSources.store.findOrCreateUser()
  },
  Movie: {
    actors(movie, _,  { store }){
      const res =  store.getPersonById(movie.actors, "actors" )
      return res
    }, 
    directors(movie, _,  { store }){
      const res =  store.getPersonById(movie.directors, "directors" )
      return res
    }, 
  }
};