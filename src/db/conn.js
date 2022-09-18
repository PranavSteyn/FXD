const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://furniturexd:1234@cluster0.moei87j.mongodb.net/?retryWrites=true&w=majority").then(()=>{
console.log("connection established");

}).catch(()=>{
    console.log("connection error")
});
