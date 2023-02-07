import React from "react";
import { useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
  );
};

export default Breadcrumbs;
