import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to the top on every route change (the "pages open from the bottom" fix).
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

export default ScrollToTop;