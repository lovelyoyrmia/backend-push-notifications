const express = require("express");

const app = express();
app.use(express.json());

app.use("/api", require("./routes/app.routes"));

var PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
