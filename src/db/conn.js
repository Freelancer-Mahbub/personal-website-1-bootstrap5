const mongoose = require("mongoose");

//creating database
mongoose.connect("mongodb://localhost:27017/fmclub" , {
    // useCreateIndex:true,
    useNewUrlParser:true , 
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.log(error);
})