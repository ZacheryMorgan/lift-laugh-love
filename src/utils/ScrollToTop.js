import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  const options = {
    smooth: true,
    duration: 600,
  };

  useEffect(() => {
    scroll.scrollToTop(options);
  }, [pathname]);

  return null;
}
