const smoothScroll = (element) => {
  const target = typeof element === "string" ? document.querySelector(element) : element;
  if (target) {
    target.scrollIntoView({
      behavior: "smooth"
    });
  }
};
export {
  smoothScroll
};
