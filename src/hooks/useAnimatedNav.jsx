// React
import { useLayoutEffect, useRef, useState } from "react";

export const useAnimatedNav = (sensible, minimumTop) => {
  const [openNav, setOpenNav] = useState(true);
  const isScrollGoingDown = useRef(false);
  const lastPositionScroll = useRef(0);
  const scoreUp = useRef(0);
  const scoreDown = useRef(0);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (document.scrollingElement.scrollTop >= lastPositionScroll.current) {
      isScrollGoingDown.current = true;
      scoreDown.current = scoreDown.current + 1;
      scoreUp.current = 0;
    } else {
      isScrollGoingDown.current = false;
      scoreDown.current = 0;
      scoreUp.current = scoreUp.current + 1;
    }
    lastPositionScroll.current = document.scrollingElement.scrollTop;
    if (document.scrollingElement.scrollTop <= minimumTop) {
      setOpenNav(true);
    } else {
      if (isScrollGoingDown.current && scoreDown.current >= sensible) {
        setOpenNav(false);
      } else if (!isScrollGoingDown.current && scoreUp.current >= sensible) {
        setOpenNav(true);
      }
    }
  };
  return openNav;
};
