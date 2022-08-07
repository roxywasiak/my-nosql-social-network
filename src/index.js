//connect to db
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async () => {
  const DB_NAME = process.env.DB_NAME;
  const MONGODB_URI =
    process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/social_db`;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(MONGODB_URI, options);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

init();
