import Router from 'koa-router'
import { getIdDetail, createId } from '../controller/index.js'

const router = new Router({prefix: '/api'})

router.get('/getIdDetail', getIdDetail)
router.post('/createId', createId)

export default router