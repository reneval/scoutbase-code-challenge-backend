const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const store =require('./store/store');   
const {getUserFromRequest} =require('./users/users.utils');   

const PORT = 4000;
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    let user
    try{
    user = getUserFromRequest(token);
    } catch {
      // throw new Error("Wrong token")
      console.warn("Wrong token")
    }
    return { user, store };
  },
 });

const app = express();

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: PORT }, () => {
  console.log(`🚀  Apollo Server on http://localhost:${PORT}/graphql`);
})