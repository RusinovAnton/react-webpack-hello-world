/**
 * Redirects client to given route via js
 * @param url
 * @returns {boolean}
 */
const redirectTo = (url) => {

  if (url) {
    location.href = url
    return true
  }
  return false

}

export default redirectTo
