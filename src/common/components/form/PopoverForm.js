import React from 'react'

import Popover from 'react-bootstrap/lib/Popover'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'


class PopoverForm extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    trigger: React.PropTypes.string,
    placement: React.PropTypes.string,
    children: React.PropTypes.object,
    values: React.PropTypes.object,
    onFormSubmit: React.PropTypes.func.isRequired,
    FormComponent: React.PropTypes.func.isRequired,
  }

  // TODO: check codestyle consistensy along all components
  constructor(props, context) {

    super(props, context)
    this.onDismissPopover = this.onDismissPopover.bind(this)

  }

  onDismissPopover() {
    this.refs.overlayComponent.handleHide()
  }

  render() {

    const {
      id,
      trigger,
      FormComponent,
      onFormSubmit,
      placement,
      values,
      children
    } = this.props

    const popoverComponent = (
      <Popover
        id={ `${id}.popover` }
        placement={ placement || 'top' }>
        <FormComponent
          ref='popoverForm'
          {...values}
          onSubmit={ onFormSubmit }
          dismissPopover={ this.onDismissPopover }/>
      </Popover>
    )

    return (
      <OverlayTrigger
        ref='overlayComponent'
        trigger={ trigger || 'click'}
        placement={ placement || 'top' }
        overlay={ popoverComponent }>
        { children }
      </OverlayTrigger>
    )

  }
}


export default PopoverForm
