export type TypeValue =
  | 'string'
  | 'number'
  | 'object'
  | 'array'
  | 'boolean'
  | 'function'
  | 'symbol'
  | 'null'
  | 'undefined'

/**
 * 判断对象类型
 */
export function typeOf(obj: unknown): TypeValue {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
