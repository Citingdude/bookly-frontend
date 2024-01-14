export default interface Respone<T> {
  kind: string
  total: number
  items: T[]
}
