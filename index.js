const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080 ;
const cors = require("cors");
const forSaleItemsRouter = require("./routes/forSaleItems");
const cartItemsRouter = require("./routes/cartItems");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

app.use("/forSaleItems", forSaleItemsRouter);
app.use("/cartItems", cartItemsRouter);

app.get("/", (request, response) => {
  response.send(console.log("test"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
