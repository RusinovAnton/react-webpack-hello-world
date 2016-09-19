import { defaultState } from './schemas'
import * as actions from '../actions/actionTypes'


export default (state = defaultState, {type, payload}) => {

  switch (type) {

    case actions.ACTION: return state.merge({payload})

    default:
      return state

  }

}
