const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
import users from "./api/users.route"

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
app.use("/api/v1/user", users);
