const R = require('ramda')
const uuidv4 = require('uuid/v4')
const jwt = require('jsonwebtoken');
var md5 = require('md5');

module.exports = {
  Query: {
    movies: (_, __, { store }) => store.getAllMovies(),
    movie: (_, { id}, { store }) => store.getMovieById({ movieId: id }),
    users: (_, __, { store }) => store.getAllUsers(),
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
    scoutbase_rating(movie, _,  { store, user }){
      if(user){
        return Math.round(Math.random() * 40 + 50) / 10
      }
      return null
    }, 
  },
  Mutation: {
    createUser: (_, { username, password },  { store }) => {
      const user = store.createUser({id: uuidv4(), username, password:md5(password)})
      return{
        user,
        token:jwt.sign({ username: user.username, id: user.id }, process.env.JWT_SECRET_KEY)
      }
    },
    login: (_, { username, password },  { store }) => {
      const user = store.findUser({ username, password:md5(password)})
      if(!user) {
        throw new Error ("Wrong username /password")
      }
      return{
        user,
        token:jwt.sign({ username: user.username, id: user.id }, process.env.JWT_SECRET_KEY)
      }
    },
  }
}; 