
export const onError = (ctx, err) => {
  ctx.status = 500
  ctx.body = {
    data: {},
    msg: err.msg || '接口报错',
    code: err.code || '4444'
  }
}