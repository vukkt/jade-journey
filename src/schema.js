// src/schema.js
const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Query {
    hello: String
    merchants: [Merchant!]
  }

  type Merchant {
    id: ID!
    email: String!
    storeName: String!
    products: [Product!]
  }

  type Product {
    id: ID!
    title: String!
    description: String
    images: [String!]!
    price: Int!
    variants: [Variant!]
    merchant: Merchant!
  }

  type Variant {
    id: ID!
    color: String!
    size: String!
    product: Product!
  }

  # Add more types as needed
`;

module.exports = typeDefs;
