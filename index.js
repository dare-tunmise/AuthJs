const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require("cookie-parser")

const app = express();
app.use(cors());
app.use(helmet())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.json({message: "Hello from server"})
})

app.listen(process.env.PORT, ()=> {
    console.log('listening')
})