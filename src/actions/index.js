import * as actions from './actionTypes'

import db from '../firebase'


export const actionCreator = (payload) => ({
  type: actions.ACTION,
  payload
})
