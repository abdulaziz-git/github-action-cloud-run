const express = require("express");
const app = express();

app.listen(8888, () => {
  console.log("Application started and Listening on port 8888");
});

app.get("/", (req, res) => {
  res.send(
    `Hello world from GCP CI/CD with cloud run`
  );
});
