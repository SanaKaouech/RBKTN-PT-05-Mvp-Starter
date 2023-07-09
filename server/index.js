const express = require("express");
const itemRoutes = require('./routes/item.routes')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/items", itemRoutes);

app.get("/api/mongose", async(req, res)=>{
  try {
    await docModel.find({})
    .then(result=>{
    res.status(200).send(result)
    })
    } catch (error) {
    res.status(500).send(error);
  }
  });

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

