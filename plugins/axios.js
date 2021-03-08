export default function ({ app, env }) {
  const IS_PROD = process.env.NODE_ENV === 'production'

  /** Trying to request */
  app.$axios.onRequest(config => {
    const { method, url, params, data } = config
    config.withCredentials = true

    // if (IS_PROD) {
    //   config.baseURL = env.API_PUBLIC_DOMAIN
    // } else {
    //   if (process.server) {
    //     // config.baseURL = 'http://api:3000'
    //     config.baseURL = 'http://localhost:3000'
    //   } else if (process.client) {
    //     config.baseURL = 'http://localhost:3000'
    //   }
    // }

    app.$log(
      `[Axios Request] Making request to ${method.toUpperCase()} "${url}"`,
      {
        params,
        data
      }
    )
    return config
  })

  /** Succeed */
  app.$axios.onResponse(res => {
    app.$log(`[Axios Response]`, res.data.data)

    return res.data.data
  })

  /** Error */
  app.$axios.onError(err => {
    const status = err.response ? err.response.status : 'No status'

    app.$log(err.message)
    app.$log(err.stack)

    app.$log(`[Axios Error] ${status}`, err.response.data)

    return Promise.reject(err)
  })
}