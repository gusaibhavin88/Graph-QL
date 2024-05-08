const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { ListUsersQuery, GetUserQuery } = require("./queries/User.query");
const {
  UserAdd,
  UpdateUser,
  DeleteUser,
} = require("./mutations/user.mutation");

const RootQuery = new GraphQLObjectType({
  name: "query",
  fields: {
    userList: ListUsersQuery,
    getUser: GetUserQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createUser: UserAdd,
    updateUser: UpdateUser,
    deleteUser: DeleteUser,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
