const { GraphQLList, GraphQLString } = require("graphql");
const { UserType } = require("../typeDefs/UserType");
const User = require("../../model/user.model");

module.exports.ListUsersQuery = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    let data = User.find({});
    return data;
  },
};

module.exports.GetUserQuery = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    let data = await User.find({ _id: args?.id }).exec();
    return data;
  },
};
