import React from 'react'

import Button from 'react-bootstrap/lib/Button'


const SubmitDismissBtnGroup = ({onSubmit, onDismiss}) =>
(
  <div className="btn-group">
    <Button
      bsClass="btn btn-success btn-xs"
      type='submit'
      onClick={ onSubmit }>
      <i className="fa fa-check"/>
    </Button>
    <Button
      bsClass="btn btn-danger btn-xs"
      onClick={ onDismiss }>
      <i className="fa fa-close"/>
    </Button>
  </div>
)

SubmitDismissBtnGroup.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onDismiss: React.PropTypes.func.isRequired,
}

export default SubmitDismissBtnGroup
