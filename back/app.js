import express from 'express';
import { PORT } from './config/config.js';
import all from './routes/AllRoute.js'

import cors from 'cors'
let app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(all);

app.listen(PORT, ()=>{
    console.log("Server Running With Port ", PORT);
})