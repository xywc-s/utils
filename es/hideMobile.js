function hideMobile(mobile) {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}
export {
  hideMobile
};
