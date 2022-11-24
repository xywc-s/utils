"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const smoothScroll = (element) => {
  const target = typeof element === "string" ? document.querySelector(element) : element;
  if (target) {
    target.scrollIntoView({
      behavior: "smooth"
    });
  }
};
exports.smoothScroll = smoothScroll;
