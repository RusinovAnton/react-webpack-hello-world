/**
 *
 * @param array
 * @param value
 * @param index
 * @returns {string|Array.<T>}
 */
export const push = (array, value, index) =>
  array
    .slice(0, index)
    .concat(value)
    .concat(array.slice(index + 1));


/**
 *
 * @param array
 * @param index
 * @returns {*|{options, bootstrap}|Array|Iterable<K, V>|string|{tasks, files}}
 */
export const pull = (array, index) =>
  array
    .slice(0, index)
    .concat(array.slice(index + 1));
