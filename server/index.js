
import cors from "cors";
import express from "express";
import { publicDir } from "./utils/multerTools.js";
import {db, conectDB} from "./database/db.js";
import {router as BrokerRouter} from "./routes/BrokerRouter.js";
import {router as UserRouter} from "./routes/UserRouter.js";
import {router as ClientRouter} from "./routes/ClientRouter.js";
import {router as ContractRouter} from "./routes/ContractRouter.js";
import {router as InsuranceRouter} from "./routes/InsuranceRouter.js";
import {router as PolicyRouter} from "./routes/PolicyRouter.js";
import {router as PaymentTypeRouter} from "./routes/PaymentTypeRouter.js";
import {router as PayReportRouter} from "./routes/PayReportRouter.js";
import {router as HistoricBalanceRouter} from "./routes/HistoricBalanceRouter.js";
import {router as CasualtyRouter} from "./routes/CasualtyRouter.js";
import {router as AdjPackRouter} from "./routes/AdjPackRouter.js";
import {router as AdjFileRouter} from "./routes/AdjFileRouter.js";
import {router as LoadRouter} from "./routes/LoadRouter.js"

const app = express();

//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(publicDir));
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Estas en la pagina principal");
})

//DB MODELS ROUTERS

app.use("/user", UserRouter);
app.use("/broker", BrokerRouter);
app.use("/client", ClientRouter);
app.use("/contract", ContractRouter);
app.use("/insurance", InsuranceRouter);
app.use("/policy", PolicyRouter);
app.use("/paymenttype", PaymentTypeRouter);
app.use("/payreport", PayReportRouter);
app.use("/historicbalance", HistoricBalanceRouter);
app.use("/casualty", CasualtyRouter);
app.use("/adjpack", AdjPackRouter);
app.use("/adjfile", AdjFileRouter);

//TOOLS ROUTERS

app.use("/load", LoadRouter);

conectDB();

const PORT = 5000; 
app.listen(PORT,()=>console.log("Servidor activo en el puerto " + PORT))