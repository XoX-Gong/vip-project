import Koa from "koa";
import router from "./router/index.js";
import cors from "koa2-cors";
import config from './config/default.js'

const app = new Koa();

app.use(cors({
  origin(ctx){
    return ctx.headers.Origin|| ctx.headers.origin|| 'http://127.0.0.1';
  },
  credentials: true
}));

app.use(router.routes());

app.listen(config.port);
