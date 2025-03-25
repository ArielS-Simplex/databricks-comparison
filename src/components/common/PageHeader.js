import React from 'react';
import '../../styles/common.css';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="header-gradient">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
