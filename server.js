const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const connectDB = require("./config/db");

// Connext DB
connectDB();

// Init middleware
app.unsubscribe(
  express.json({
    extended: false,
  })
);

// parse application/x-www-form-urlencoded - not in tutorial (npm i body-parser)
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json - not in tutorial - not in tutorial (npm i body-parser)
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.json({
    msg: "Welcome to the ContactKeeper API",
  })
);

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
