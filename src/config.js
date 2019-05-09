export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'https://127.0.0.1:4000/api/query'
  : 'https://127.0.0.1:4000/api/query' // 已加跨域代理头，注意仅支持GET请求
