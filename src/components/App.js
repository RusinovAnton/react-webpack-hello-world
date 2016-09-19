import React from 'react'
import { connect } from 'react-redux'

import { actionCreator } from '../actions'


class App extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  }

  render = () => (
    <div>
      <h1>Hello world!</h1>
    </div>
  )

}

export default connect(
  ({store}) => ({store}),
  actionCreator
)(App)
