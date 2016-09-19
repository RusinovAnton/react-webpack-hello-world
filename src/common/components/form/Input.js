import React from 'react'

import AnimatedLabel from './AnimatedLabel'

import '../style/form-group.scss'


class Input extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      labelVisible: false,
      inputValue: '',
      focused: true,
      error: props.error
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onInputKeyUp = this.onInputKeyUp.bind(this)
    this.onDefaultChange = this.onDefaultChange.bind(this)
    this.autoFocus = this.autoFocus.bind(this)

  }

  static propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    icon: React.PropTypes.string,
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.string,
    required: React.PropTypes.bool,
    compact: React.PropTypes.bool,
    error: React.PropTypes.string,
    // Describes other attributes
    attrs: React.PropTypes.object,
    onKeyUp: React.PropTypes.func,
    onChange: React.PropTypes.func
  }

  componentDidMount() {

    this.autoFocus()

  }

  componentWillMount() {

    if (this.props.value) {
      this.setState({ labelVisible: true })
    }

  }

  componentWillReceiveProps({ error }) {

    this.setState({
      error
    })

    // TODO: fix focus when form rendered first time
    if (error) {
      this.setState({
        focused: true
      })
      this.autoFocus()
    }

  }

  autoFocus() {

    const x = window.scrollX
    const y = window.scrollY
    this.refs.inputNode.focus()
    window.scrollTo(x, y)

  }

  onInputKeyUp(e) {

    if (e.target.value.length) {
      this.setState({ labelVisible: true })
    } else {
      this.setState({ labelVisible: false })
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(e)
    }

  }

  onDefaultChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  onInputChange(e) {

    if (e.target.value) {
      this.setState({ error: null })
    }

    if (this.props.onChange) {
      this.props.onChange(e)
      return
    }

    this.onDefaultChange(e)

  }

  render() {

    const {
      id,
      type,
      label,
      icon,
      name,
      defaultValue,
      value,
      required,
      compact,
      attrs
    } = this.props

    const error = this.state.error

    let errorLabel = error ? (
      <span className='help-block'>
        { error }
      </span>) : null

    let inputAddon = icon ? (
      <span className='input-group-addon'>
        <i className={ icon }/>
      </span>
    ) : null

    const inputNode = defaultValue ?
      (
        <input
          className='form-control'
          ref='inputNode'
          id={ id || name }
          defaultValue={ defaultValue }
          autoComplete='off'
          placeholder={ `${ required ? '* ' : ''}${ label || ''}` }
          name={ name }
          type={ type || 'text' }
          required={ required }
          {...attrs}
          onKeyUp={ this.onInputKeyUp }
          onChange={ this.onInputChange }/>
      ) :
      (
        <input
          className='form-control'
          ref='inputNode'
          id={ id || name }
          value={ value || this.state.inputValue }
          autoComplete='off'
          placeholder={ `${ required ? '* ' : ''}${ label || ''}` }
          name={ name }
          type={ type || 'text' }
          required={ required }
          {...attrs}
          onKeyUp={ this.onInputKeyUp }
          onChange={ this.onInputChange }/>
      )

    return (
      <div className={`form-group form-group-material ${ compact ? 'form-group--compact' : '' } ${ error ? 'has-error' : ''}`}>
        <AnimatedLabel
          id={ id || name }
          name={ name }
          label={ label }
          isVisible={this.state.labelVisible}/>
        <div className='input-group'>
          { inputAddon }
          { inputNode }
        </div>
        { errorLabel }
      </div>
    )
  }

}

export default Input
