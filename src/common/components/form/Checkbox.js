import React from 'react'


class Checkbox extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    checked: React.PropTypes.bool,
    label: React.PropTypes.string,
    attrs: React.PropTypes.object,
    onChange: React.PropTypes.func.isRequired
  }

  render() {

    const {
      id,
      checked,
      label,
      attrs,
      onChange
    } = this.props

    return (
      <label htmlFor={ id || name } className="checkbox-inline">
        <div className="checker">
          <span className={ checked ? 'checked' : '' }>
            <input
              id={id || name}
              name={name}
              type="checkbox"
              className="styled"
              checked={ !!checked }
              { ...attrs }
              onChange={ onChange }/>
          </span>
        </div>
        { label }
      </label>
    )

  }

}

export default Checkbox
