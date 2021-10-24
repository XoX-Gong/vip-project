import Koa from 'koa'
import router from './router.js'
import cors from 'koa2-cors'

const app = new Koa

app.use(router.routes())
app.use(cors({
  // credentials: true, 
  origin: '*',
}))

app.listen(4000)