import Router from 'koa-router'

const router = new Router({prefix: '/api'})

router.get('/getIdDetail', (ctx, next) => {
  const { id } = ctx.query
  console.log(id)
  ctx.body = {
    id: '345345345werwer45we',

  }

})

export default router