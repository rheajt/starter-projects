import { GraphQLServer } from 'graphql-yoga';
import Query from './resolvers/Query';

export default function() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Query,
    },
    context(req) {
      return { ...req };
    },
  });
}
