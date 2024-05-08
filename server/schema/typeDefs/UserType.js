const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require("graphql");

exports.UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    _id: { type: GraphQLString },
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLInt },
    age: { type: GraphQLInt },
    work: { type: GraphQLString },
    add: { type: GraphQLString },
    desc: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});

exports.ResponseType = new GraphQLObjectType({
  name: "responseType",
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
