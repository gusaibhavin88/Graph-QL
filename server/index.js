const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");
const app = express();
const cors = require("cors");
const port = 4000;
require("./config/database");

app.use(express.json());
app.use(cors());

const root = {
  secretKey: "wfefefef",
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, async () => {
  console.log(`Server started at port:${port}`);
});
