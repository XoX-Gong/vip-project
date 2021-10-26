import { onError } from './helpers.js'
import { HashId } from '../db/model.js'
import { v4 as uuidv4 } from 'uuid';

export const createId = async ctx => {
  const id = uuidv4()
  await HashId({ hash_id: id, vips: [] }).save()
  ctx.body = {
    data: {
      id
    },
    msg: `创建id成功`,
    code: '000000'
  }
}

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

