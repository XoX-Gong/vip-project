import r from './req'

export const getIdDetailApi = async id => {
  return await r.get(`/getIdDetail`, {
    params: { id }
  })
}