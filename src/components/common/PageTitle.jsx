import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Comoponents to set custom meta title of each pages
const PageTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `JoBins | ${title}`;
  }, [location, title]);

  return null;
};

export default PageTitle;
