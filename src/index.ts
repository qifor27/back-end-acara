import express from "express";
import route from "./routes/api";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use('/api', route);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})