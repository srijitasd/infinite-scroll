const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/posts", (req, res) => {
  const { start, end } = req.body;
  const data = require("./data/posts.json");

  const posts = data.slice(start, end);

  res.send(posts);
});
