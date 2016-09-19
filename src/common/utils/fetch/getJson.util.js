import 'whatwg-fetch'


export default (url) => {

  return fetch(url,
    {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => {

      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      }

      return Promise.reject({
        status: response.status,
        text: response.statusText
      })

    })
    .then(response => {
      return response.json()
    })

}
