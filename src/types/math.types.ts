import Decimal from 'decimal.js'

// 可以用于数学计算的值类型
export type MathValue = number | string | Decimal

// 数学运算结果类型
export type MathResult<T extends number | undefined = undefined> = T extends number
  ? string
  : number

// 比较结果
export type CompareResult = -1 | 0 | 1

// 数学运算配置
export interface MathConfig {
  /** 精度（有效数字位数） */
  precision?: number
  /** 舍入模式 */
  rounding?: Decimal.Rounding
}

// 数学运算函数类型
export interface MathOperations {
  add: <T extends number | undefined = undefined>(
    _a: MathValue,
    _b: MathValue,
    _digit?: T
  ) => MathResult<T>

  subtract: <T extends number | undefined = undefined>(
    _a: MathValue,
    _b: MathValue,
    _digit?: T
  ) => MathResult<T>

  multiply: <T extends number | undefined = undefined>(
    _a: MathValue,
    _b: MathValue,
    _digit?: T
  ) => MathResult<T>

  divide: <T extends number | undefined = undefined>(
    _a: MathValue,
    _b: MathValue,
    _digit?: T
  ) => MathResult<T>

  sum: <T extends number | undefined = undefined>(_arr: MathValue[], _digit?: T) => MathResult<T>

  product: <T extends number | undefined = undefined>(
    _arr: MathValue[],
    _digit?: T
  ) => MathResult<T>

  round: (_num: MathValue, _digit: number) => string

  compare: (_a: MathValue, _b: MathValue) => CompareResult
}
