const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/codesphere")
.then(()=>console.log("MongoDB Connected"));
    
