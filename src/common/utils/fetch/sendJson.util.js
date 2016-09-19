import 'whatwg-fetch'


/**
 *
 * @param {object} body
 * @param {string} endpoint
 * @param {string} method ('POST' if not specified)
 * @returns {promise}
 */
const sendJson = (body, endpoint, method) =>
  fetch(endpoint, {
    method: method.toUpperCase() || 'POST',
    body: JSON.stringify(body),
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }})
  .then(({status, message}) => {

    if (status >= 200 && status < 300) {
      return json()
    }
    return Promise.reject({
      status,
      message
    })

  })

export default sendJson

export const postJson = (body, endpoint) => sendJson(body, endpoint, 'POST')
export const patchJson = (body, endpoint) => sendJson(body, endpoint, 'PATCH')
export const putJson = (body, endpoint) => sendJson(body, endpoint, 'PUT')
