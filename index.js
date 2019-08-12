const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()
app.use(cors())

// data dari database
const conn = mysql.createConnection({
    host : '35.186.145.138',
    user: "fadliselaz",
    password : "fadliselaz13",
    database : "reactSql"
})

// validasi koneksi
conn.connect(err =>{
    if(err){
        return err
    }
})

// parameter querynya
const SELECT_ALL_PRODUCT_QUERY = "SELECT * FROM product"


app.get("/", (req,res)=>{
    res.send("go to /product")
})

app.get("/product", (req,res)=>{
    conn.query(SELECT_ALL_PRODUCT_QUERY, (err, result)=>{
        if(err){
            return req.send(err)
        }else{
            res.json({data : result})
        }
    })
})

app.getMaxListeners("/post", (req, res) => {
    var nm = "kopi"
    conn.query(`SELECT * FROM product WHERE name="${nm}"`, (err, result) =>{
        if(err){
            return req.send(err)
        }else{
            res.json({data : result})
        }
    })
})


app.get("/product/add", (req,res) =>{
    const {name, price} = req.query
    console.log(name, price)
    const INSERT_PRODUCT_QUERY = `INSERT INTO product(name, price) VALUES('${name}',${price})`
    conn.query(INSERT_PRODUCT_QUERY)
    res.send(`success adding product ${name} and ${price}`)
    
})




app.listen(4000, () =>{
    console.log("listening to port 3000 ya..");
    
})



