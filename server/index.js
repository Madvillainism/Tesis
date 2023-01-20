
import cors from "cors";
import express from "express";
import {db, conectDB} from "./database/db.js";
import {router as BrokerRouter} from "./routes/BrokerRouter.js";
import {router as UserRouter} from "./routes/UserRouter.js";
import {router as ClientRouter} from "./routes/ClientRouter.js";
import {router as ContractRouter} from "./routes/ContractRouter.js";
import {router as InsuranceRouter} from "./routes/InsuranceRouter.js";
import {router as PolicyRouter} from "./routes/PolicyRouter.js";
import {router as PaymentTypeRouter} from "./routes/PaymentTypeRouter.js";
import {router as PayReportRouter} from "./routes/PayReportRouter.js";


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
app.use("/contract", ContractRouter);
app.use("/insurance", InsuranceRouter);
app.use("/policy", PolicyRouter);
app.use("/paymenttype", PaymentTypeRouter);
app.use("/payreport", PayReportRouter);

conectDB();

const PORT = 5000; 
app.listen(PORT,()=>console.log("Servidor activo en el puerto " + PORT))