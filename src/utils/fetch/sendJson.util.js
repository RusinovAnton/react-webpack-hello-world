import 'whatwg-fetch';
import csrfToken from '../../const/csrfToken.const';


/**
 *
 * @param {object} body
 * @param {string} endpoint
 * @param {string} method ('POST' if not specified)
 * @returns {promise}
 */
const sendJson = (body, endpoint, method) => {

  return fetch(endpoint,
    {
      method: method.toUpperCase() || 'POST',
      body: JSON.stringify(body),
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      }
    })
    .then((response) => {

      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }

      return Promise.reject({
        status: response.status,
        message: response.statusText
      });

    });

};

export default sendJson;

export const postJson = (body, endpoint) => sendJson(body, endpoint, 'POST');
export const patchJson = (body, endpoint) => sendJson(body, endpoint, 'PATCH');
export const putJson = (body, endpoint) => sendJson(body, endpoint, 'PUT');
