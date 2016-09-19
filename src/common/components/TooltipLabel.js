import React from 'react'

import Label from 'react-bootstrap/lib/Label'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

import uniqueId from 'lodash/uniqueId';


const TooltipLabel = ({
  placement,
  children,
  labelProps,
  labelClassName,
}) => (
  <OverlayTrigger
    placement={ placement || 'top' }
    overlay={(
      <Tooltip
        id={ uniqueId('tooltip_') }
        placement={ placement || 'top' }
        { ...props.tooltipProps }>
        { props.tooltipBody }
      </Tooltip>
    )}>
    <Label
      className={`label ${labelClassName || ''}`}
      { ...labelProps }>
      { children }
    </Label>
  </OverlayTrigger>
)

TooltipLabel.propTypes = {
  placement: React.PropTypes.string,
  children: React.PropTypes.any.isRequired,
  tooltipBody: React.PropTypes.any.isRequired,
  tooltipProps: React.PropTypes.object,
  labelProps: React.PropTypes.object,
  labelClassName: React.PropTypes.string
}

export default TooltipLabel
