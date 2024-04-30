const express = require ('express') 
const app = express()

app.get('/', function (req, res) {
res.send('Hello Saya Alim Sujito Mahasiswa SM 4.1 Siap Belajar Express Js!!')
})
const dataRouter = require("./routers/dataRouter"); 
app.use("/", dataRouter); 
app.use("/api", dataRouter);
app.listen(5000, function(){
})

console.log('server berjalan lancar')