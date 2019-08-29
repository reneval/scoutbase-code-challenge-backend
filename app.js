const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const store = require('./store/store');
require('dotenv').config()

const PORT = 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    let user
    const token = req.headers.authorization || '';
    if (token) {
      try {
        user = store.getUserByToken(token);
      } catch {
        console.warn("Wrong token")
      }
    }
    return { user, store };
  },
});

const app = express();

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: PORT }, () => {
  console.log(`🚀  Apollo Server on http://localhost:${PORT}/graphql`);
})