const { gql } = require('apollo-server');

const typeDefs = gql`

type Movie {
  id: ID!
  title:String
  year: Int,
  rating: Float,
  scoutbase_rating: Float,
  actors: [Person]
  directors: [Person]
}

type Person {
  id: ID!
  name:String
  birthday: String
  country:String
}

type User {
  id: ID!
  username: String!
}

type Token {
  user: User!
  token: String!
}

type Query {
  movies: [Movie]!
  movie(id: ID!): Movie
  users: [User]
  me: User
}

type Mutation {
  createUser(username: String, password: String): Token!
  login(username: String, password: String): Token!
}
`;

module.exports = typeDefs;