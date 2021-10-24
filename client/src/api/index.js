import axios from 'axios'


const instance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 1000,
  headers: {
    'crossdomain': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  // withCredentials: true
});

export const getIdDetailApi = async id => {
  return await instance.get(`/getIdDetail`, {
    params: { id }
  })

  // return {
  //   id: '7777'
  // }
}