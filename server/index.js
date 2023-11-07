const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const cors = require("cors");

const app = express();

const PORT = process.env._PORT || 5001;

// Connecting to the database
mongoose
  .connect(process.env.DB)
  .then(() => console.log(`Database connected successfully`))
  .catch((error) => console.log(error));

mongoose.Promise = global.Promise;

app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(bodyParser.json()); // Same code didn't worked (dont know the reason)
app.use(bodyParser.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
