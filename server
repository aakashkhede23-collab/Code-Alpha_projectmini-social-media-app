const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/auth"));
app.use("/api/reels", require("./routes/reels"));

app.listen(5000,()=>console.log("Server running on 5000"));
