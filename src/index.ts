import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }
    
    type Query {
        books: [Book]
    }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

// Resolvers define the technique for fetching the types in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// The `listen` method launches a web server.
// The `port` option is optional. If not specified, the server will start
// on port 4000 by default.
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
