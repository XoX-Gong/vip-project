import { onError } from './helpers.js'

export const getIdDetail = ctx => {
  try {
    const { id } = ctx.query
    ctx.body = {
      id: '123456'
    }
  } catch (err) {
    onError(ctx, err)
  }
} 