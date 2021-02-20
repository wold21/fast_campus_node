const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const port = 4000;

const schema = buildSchema(
  // !느낌표는 필수라는 뜻.
  // addProduct(input : ProductInput) : Product
  // 함수의 인자는 input으로 ProductInput에서 받아올것이다.
  // : 리턴타입은 Product이다.
  `
input ProductInput{
    name : String
    price : Int
    description : String
}

type Product{
    id : ID! 
    name : String
    price : Int
    description : String
}

type Query{
    getProduct(id : ID! ) : Product
}

type Mutation{
    addProduct(input : ProductInput) : Product
    updateProduct(id : ID!, input : ProductInput!) : Product
    deleteProduct(id : ID!) : String
}
`
);

const product = [
  {
    id: 1,
    name: "첫번째 제품",
    price: 2000,
    description: "테스트1",
  },
  {
    id: 2,
    name: "두번째 제품",
    price: 4000,
    description: "테스트2",
  },
];

const root = {
  getProduct: ({ id }) =>
    product.find((product) => product.id === parseInt(id)),

  // Create
  addProduct: ({ input }) => {
    input.id = parseInt(product.length + 1);
    product.push(input);
    return root.getProduct({ id: input.id });
  },

  // Update
  updateProduct: ({ id, input }) => {
    const index = product.findIndex((product) => product.id === parseInt(id));
    product[index] = {
      id: parseInt(id),
      ...input,
    };
    return product[index];
  },

  // Delete
  deleteProduct: ({ id }) => {
    const index = product.findIndex((product) => product.id === parseInt(id));
    product.splice(index, 1);
    return "remove success";
  },
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // GUI 제공
  })
);

app.use("/static", express.static("static"));

app.listen(port, () => {
  console.log(`running server port ${port}`);
});
