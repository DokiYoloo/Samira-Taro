import { components } from './schema'

declare global {
  type Schemas = components['schemas']
  interface API extends Schemas {
    // 方便后面对Schemas中的属性值覆盖&重写
  }
}

export interface Page<T> {
  totalElements: number
  totalPages: number
  number: number
  first: boolean
  last: boolean
  size: number
  content: T[]
  empty: boolean
}
