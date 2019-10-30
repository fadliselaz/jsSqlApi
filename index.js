const express = require("express")
// const cors = require("cors")
const mysql = require("mysql")
const app = express()
// app.use(cors())

// const app = express()

// data dari database
const conn = mysql.createConnection({
    host : 'localhost',
    user: "root",
    password : "",
    database : "fadliselaz"
})

// validasi koneksi
conn.connect(err => {
    if(err){
        return console.log(err)
    }else{
        console.log("databases berhasil terkonek..")
    }
})

// parameter querynya
const SELECT_ALL_USERS = "SELECT * FROM userdata"


app.get("/", (req,res)=>{
    res.send("go to /userdata")
})

app.get("/userdata", (req,res)=>{
    conn.query(SELECT_ALL_USERS, (err, result)=>{
        if(err){
            return res.send(err)
        }else{
            res.json({data : result})
        }
    })
})


// ini merupakan endpoit untuk menambah user,
// caranya adalah dengan ke localhost:3000/userdata/add/?username=terserah&password=terserah

app.get("/userdata/add/", (req,res) =>{
    const {username, password} = req.query
    if(!username && !password){
        res.status(404).send("masukan dulu user dan passnya")
        
    }else{
        console.log(username, password)
        const INSERT_PRODUCT_QUERY = `INSERT INTO userdata(username, password) VALUES('${username}','${password}')`
        conn.query(INSERT_PRODUCT_QUERY)
        res.send(`success adding user ${username} and ${password}`)
    }

   
})




app.listen(3000, () =>{
    console.log("listening to port 3000 ya..");
    
})



