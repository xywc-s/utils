import { isPlainObject, omitBy, isNil, isNaN, isObject, isEmpty, isString } from "lodash-es";
function validParams(params, fn) {
  if (!isPlainObject(params))
    return params;
  const result = omitBy(params, (value) => {
    if (isNil(value))
      return true;
    if (isNaN(value))
      return true;
    if (isObject(value) && isEmpty(value))
      return true;
    if (isArray(value) && !value.length)
      return true;
    if (isString(value) && !value)
      return true;
    return false;
  });
  return fn ? fn(result) : result;
}
export {
  validParams
};
