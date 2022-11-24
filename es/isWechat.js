function isWechat() {
  return /micromessenger/i.test(navigator.userAgent);
}
export {
  isWechat
};
