import express from 'express';
import AllRoutes from './routes/AllRoutes.js'
import cors from 'cors'
let app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(AllRoutes);
let PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("Server Running With Port ", PORT);
})