// express
const express = require("express");

const routerAPI = require("./routes");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Open server Express");
});

app.use(express.json());

routerAPI(app);

app.listen(port, () => {
  console.log(`Listening from ${port}`);
})
