function isAndroid() {
  return navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") > -1;
}
export {
  isAndroid
};
