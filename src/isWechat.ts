export function isWechat() {
  return /micromessenger/i.test(navigator.userAgent)
}
