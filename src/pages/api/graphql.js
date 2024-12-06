import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import typeDefs from "@/schema.js";
import resolvers from "@/resolvers.js";

const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const handler = startServerAndCreateNextHandler(server, {
	context: async () => ({}), // Add any context here if needed
});

export default handler;
