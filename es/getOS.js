import { isIOS } from "./isIOS.js";
import { isAndroid } from "./isAndroid.js";
function getOS() {
  if (isIOS()) {
    return 1;
  }
  if (isAndroid()) {
    return 2;
  }
  return 3;
}
export {
  getOS
};
