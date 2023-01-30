import React from 'react'
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    console.log(location)
    return (
      <div>breadcrumbs</div>
    );
  };

export default Breadcrumbs