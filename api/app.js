import express from 'express';
import routes from '../back/routes/AllRoutes.js';
import cors from 'cors'
import { PORT } from './config/config.js';
let app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(routes);

app.listen(PORT, ()=>{
    console.log("Server Running With Port ", PORT);
})