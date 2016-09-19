import React from 'react'

import Loader from '../Loader'


const SubmitButton = ({ status }) => {

  const isLoading = status === 'PENDING'

  return (
    <button className="btn btn-warning" type="submit" disabled={isLoading}>
      {isLoading ? <Loader/> : null}
      { $lang('realty.form.submit') }
      <i className='icon-arrow-right14 position-right'/>
    </button>
  )

}

SubmitButton.propTypes = {
  status: React.PropTypes.string
}

export default SubmitButton
