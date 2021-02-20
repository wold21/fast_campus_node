const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
type Query{
    hello : String
    bye : String
    nodejs : Int
}`);

const root = {
  hello: () => "hello world",
  bye: () => "bye world",
  nodejs: () => 20 + 20,
};

graphql(schema, "{nodejs}", root).then((response) => {
  console.log(response);
});
