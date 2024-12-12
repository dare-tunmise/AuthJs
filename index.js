const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');


mongoose.connect(process.env.dbURI)
.then(()=> {
    console.log('Database connected')
})
.catch((err)=> {
    console.log('err');
})



const app = express();
app.use(cors());
app.use(helmet())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', authRouter);

app.get('/', (req, res)=> {
    res.json({message: "Hello from server"})
})

app.listen(process.env.PORT, ()=> {
    console.log(`server is listening on port ${process.env.PORT}`)
})