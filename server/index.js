
import cors from "cors";
import express from "express";
import {db, conectDB} from "./database/db.js";
import {router as BrokerRouter} from "./routes/BrokerRouter.js";
import {router as UserRouter} from "./routes/UserRouter.js";
import {router as ClientRouter} from "./routes/ClientRouter.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  res.send("Estas en la pagina principal");
})

app.use("/user", UserRouter);
app.use("/broker", BrokerRouter);
app.use("/client", ClientRouter);

conectDB();

const PORT = 5000; 
app.listen(PORT,()=>console.log("Servidor activo en el puerto " + PORT))