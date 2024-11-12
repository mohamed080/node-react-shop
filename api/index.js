const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT  = process.env.PORT;

const mongoose = require("mongoose");

// connect to database

mongoose.connect(process.env.MONSOOSEDB_RUL)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log(error));

const databaseSeeder = require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json())

// database seeder routes
app.use('/api/seed',databaseSeeder);

// routes for users
app.use('/api/users', userRoute);

// routes for AllPRoducts
app.use('/api/products', productRoute);

// routes for order
app.use('/api/orders', orderRoute);

app.listen( PORT || 9000, () => {
    console.log(`Server is running on port ${PORT}`);
})




















// mohayman080
// wVmztrWkkEjjH1g5
// mongodb+srv://mohayman080:wVmztrWkkEjjH1g5@cluster0.ioio9.mongodb.net/REACT-NODE-APP


// api product test route 
// app.get("/api/products", (req, res) => {
//     res.json(products);
// })

// app.get("/api/products/:id", (req, res) => {
//     const product = products.find((product) => product.id === req.params.id);
//     res.json(product);
// })
