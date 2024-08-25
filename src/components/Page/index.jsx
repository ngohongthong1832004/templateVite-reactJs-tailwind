/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const Page = ({ title = "Home", children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
};

export default Page;
