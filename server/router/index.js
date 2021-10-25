import Router from 'koa-router'
import { getIdDetail } from '../controller/index.js'

const router = new Router({prefix: '/api'})

router.get('/getIdDetail', getIdDetail)

export default router