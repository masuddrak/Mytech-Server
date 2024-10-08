const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 5000;

// middelware

const corsOptions = {
  origin: ["http://localhost:5173", "https://trackshop-e2f38.web.app"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

// create database
const uri = process.env.BD_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const MyTechDB = client.db("MyTechDB");
    const productsCollection = MyTechDB.collection("products");
    // all Route Api
    app.get("/products", async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);

      const {
        searchText,
        maxPrice,
        minPrice,
        category,
        brand_name,
        sortPrice,
      } = req.query;
      console.log(searchText, maxPrice, category, brand_name, sortPrice);
      const query = {
        name: {
          $regex: searchText,
          $options: "i",
        },
      };
      //  sort low to hi
      if (sortPrice=="low") {
        const result = await productsCollection.find().sort( { "price": 1 } ).toArray()
        return res.send(result);
      }
      // max and minimum price sorting
      if (minPrice > 0 && maxPrice < 20000) {
        const result = await productsCollection
          .find({
            price: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) },
          })
          .toArray();
        return res.send(result);
      }
      // search products
      if (searchText) {
        const products = await productsCollection.find(query).toArray();
        return res.send(products);
      }
      // load product category basis
      if (category) {
        const result = await productsCollection.find({ category }).toArray();
        return res.send(result);
      }
      // load product brand basis
      if (brand_name) {
        const result = await productsCollection.find({ brand_name }).toArray();
        return res.send(result);
      }
      // get all products
      const products = await productsCollection
        .find()
        .skip(page * size)
        .limit(size)
        .toArray();
      res.send(products);
    });
    // total products langth
    app.get("/totalProduct", async (req, res) => {
      const count = await productsCollection.estimatedDocumentCount();
      res.send({ count });
    });

    console.log("connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
