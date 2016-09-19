import React from 'react';
import './style/loader.scss';

export default () => {

  return (
    <span className="progress--loading">
      <i className="fa fa-gear fa-spin"/>
    </span>
  );

};
