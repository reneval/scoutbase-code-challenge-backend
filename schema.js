const { gql } = require('apollo-server');

const typeDefs = gql`

type Movie {
  id: ID!
  title:String
  year: Int,
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
  name: String!
}


type Query {
  movies: [Movie]!
  movie(id: ID!): Movie
  me: User
}

    type Mutation {
      createUser(username: String, password: String): User!
      login(username: String, password: String): User!
    }
`;
 
module.exports = typeDefs;