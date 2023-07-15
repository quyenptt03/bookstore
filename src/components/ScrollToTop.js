import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { BsArrowUpShort } from "react-icons/bs";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);
  const ScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  if (!visible) {
    return false;
  }
  return (
    <div className="scroll-to-top" onClick={ScrollToTop}>
      <BsArrowUpShort className="go-top-icon" />
    </div>
  );
};

export default ScrollToTop;
