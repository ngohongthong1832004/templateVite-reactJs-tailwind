import "nprogress/nprogress.css";

import NProgress from "nprogress";
import React, { useEffect } from "react";

export const LazyLoad = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <React.Fragment></React.Fragment>;
};
