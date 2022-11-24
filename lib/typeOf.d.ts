declare type TypeValue = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'function' | 'symbol' | 'null' | 'undefined';
/**
 * 判断对象类型
 */
export declare function typeOf(obj: unknown): TypeValue;
export {};
