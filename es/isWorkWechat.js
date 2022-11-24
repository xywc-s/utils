function isWorkWechat() {
  return /wxwork/i.test(navigator.userAgent);
}
export {
  isWorkWechat
};
