import React from 'react'

import Popover from 'react-bootstrap/lib/Popover'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Input from './Input'
import SubmitDismissBtnGroup from './SubmitDismissBtnGroup'


const preventDefault = e => e.preventDefault();

class PopoverInput extends React.Component {

  constructor() {

    super(...arguments);

    this.state = {
      inputError: null,
      initialInputValue: this.props.inputProps && this.props.inputProps.defaultValue
    };

    this.onSubmitPopover = this.onSubmitPopover.bind(this);
    this.onDismissPopover = this.onDismissPopover.bind(this);

  }

  onSubmitPopover() {

    const inputValue = this.refs.popoverInput.refs.inputNode.value;

    if (!inputValue) {
      this.setState({ inputError: $lang('validation.empty_input') });
      return;
    }

    // Dismiss only if input was not changed
    if (inputValue === this.state.initialInputValue) {
      this.onDismissPopover();
      return;
    }

    this.props.onSubmit(inputValue);
    this.onDismissPopover();

  }

  onDismissPopover() {
    this.refs.overlayComponent.handleHide();
  }

  render() {

    const {
      id,
      trigger,
      placement,
      children,
      inputProps
    } = this.props;

    const popoverComponent = (
      <Popover
        id={ `${id}.popover` }
        placement={ placement || 'top' }>

        <form onSubmit={ preventDefault }>
          <div className="row">
            <div className="col-xs-7">
              <Input
                id={ `${id}.input` }
                ref='popoverInput'
                compact
                error={ this.state.inputError }
                { ...inputProps }/>
            </div>
            <div className="col-xs-5">
              <SubmitDismissBtnGroup
                onSubmit={ this.onSubmitPopover }
                onDismiss={ this.onDismissPopover }/>
            </div>
          </div>
        </form>

      </Popover>
    );

    return (
      <OverlayTrigger
        ref='overlayComponent'
        trigger={ trigger || 'click'}
        placement={ placement || 'top' }
        overlay={ popoverComponent }>
        { children }
      </OverlayTrigger>
    );


  }
}


PopoverInput.propTypes = {
  id: React.PropTypes.string,
  trigger: React.PropTypes.string,
  placement: React.PropTypes.string,
  children: React.PropTypes.object,
  inputProps: React.PropTypes.object,
  onSubmit: React.PropTypes.func.isRequired
};

export default PopoverInput;
