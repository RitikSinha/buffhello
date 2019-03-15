const path = require('path');
const express = require ('express');
const publicpath = path.join(__dirname,'../public');
let app = express();
app.use(express.static(publicpath));
const port = process.env.PORT || 3000;
app.listen(port,()=>{
console.log(`server is up on ${port}`);
});