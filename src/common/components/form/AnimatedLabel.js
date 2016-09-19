import React from 'react'


class AnimatedLabel extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    required: React.PropTypes.bool,
    isVisible: React.PropTypes.bool
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.isVisible !== this.props.isVisible
  }

  render() {

    const {
      name,
      label,
      required,
      isVisible
    } = this.props

    return (
      <label
        htmlFor={ name }
        className={`control-label animate ${ isVisible && 'is-visible' } ${ required ? 'required' : '' }`}>
        { required ? '* ' : '' }{ label }
      </label>
    )

  }

}

export default AnimatedLabel
