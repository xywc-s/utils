"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const lodashEs = require("lodash-es");
function validParams(params, fn) {
  if (!lodashEs.isPlainObject(params))
    return params;
  const result = lodashEs.omitBy(params, (value) => {
    if (lodashEs.isNil(value))
      return true;
    if (lodashEs.isNaN(value))
      return true;
    if (lodashEs.isObject(value) && lodashEs.isEmpty(value))
      return true;
    if (lodashEs.isString(value) && !value)
      return true;
    return false;
  });
  return fn ? fn(result) : result;
}
exports.validParams = validParams;
