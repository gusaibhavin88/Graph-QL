const { GraphQLString, GraphQLInt } = require("graphql");
const { UserType, ResponseType } = require("../typeDefs/UserType");
const User = require("../../model/user.model");

module.exports.UserAdd = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLInt },
    age: { type: GraphQLInt },
    work: { type: GraphQLString },
    add: { type: GraphQLString },
    desc: { type: GraphQLString },
  },
  async resolve(parent, args) {
    try {
      await User.create(args);
      return {
        success: true,
        message: "User created successfully",
      };
    } catch (error) {
      return { success: false, message: "Error creating user", error };
    }
  },
};

module.exports.UpdateUser = {
  type: UserType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLInt },
    age: { type: GraphQLInt },
    work: { type: GraphQLString },
    add: { type: GraphQLString },
    desc: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { id, ...other_data } = args;
    await User.findByIdAndUpdate(
      args.id,
      { $set: { ...other_data } },
      { new: true }
    );
    return {
      success: true,
      message: "User deleted successfully",
    };
  },
};

module.exports.DeleteUser = {
  type: ResponseType,
  args: {
    id: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { id } = args;
    await User.findByIdAndDelete(args.id);
    return {
      success: true,
      message: "User deleted successfully",
    };
  },
};
