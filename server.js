const express = require("express");
const mysql = require ('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
  {
    host: `localhost`,
    user: `root`,
    password:`PureEnrichment666!`,
    database: `election`
  },
  console.log(`connected to the election database`)
);

app.get(`/`, (req, res) => {
  res.json({
    message: `hello world`,
  });
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
