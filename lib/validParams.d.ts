/**
 * 重构出有效的查询参数,
 * 排除参数对象上值为null,NaN,{},[],""的属性
 * @param params 需要处理的对象
 * @param fn 接收重构后的值作为参数, 进行自定义函数二次处理
 */
export declare function validParams(params: Record<string, any>, fn?: (params: Record<string, any>) => Record<string, any>): Record<string, any>;
