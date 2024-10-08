interface Todo {
  name: string,
  desc: string,
  isR: boolean
}
type my_pick<T, K extends keyof T> = { [key in K]: T[K] }
const priview: my_pick<Todo, "name" | "desc"> = { name: "lessonONe", desc: "learn ts" }
type my_readonly<T> = { readonly [key in keyof T]: T[key] }
const test2: my_readonly<Todo> = { name: "kdf", desc: 'kdf', isR: true }
type change_type_to_string<T> = { [key in keyof T]: string }
const kdfj: change_type_to_string<Todo> = { name: "dkfj", isR: 'kdf', desc: "dkfj" }
const arsenal_player = ['saka', 'raya'] as const
type tuples_type<T extends readonly any[]> = { [case_array in T[number]]: case_array; }
const tuples_type_const: tuples_type<typeof arsenal_player> = { 'raya': "raya", "saka": "saka" }
type get_first<T extends any[]> = T['length'] extends 0 ? never : T[0]
type colors = ['red', 'green', 'blue']
const raya: get_first<colors> = 'red'
type get_length<T extends any[]> = T['length']
const exp_3: get_length<colors> = 3
type exclude<T, TT> = T extends TT ? never : T
const const_ex: exclude<'a' | "b" | "c", "b"> = "c"
type my_awaited<T> = T extends Promise<infer P> ? P extends Promise<any> ? my_awaited<P> : P : never
const promise: my_awaited<Promise<Promise<string>>> = 'dkf'
type if_type<T extends boolean, F, S> = T extends true ? F : S
const test_if_type: if_type<false, 'a', 'b'> = 'b'
// must be one item in array if you permit just replace any []
type concate_type<T extends [any], S extends [any]> = [...T, ...S]
const test_concate_type: concate_type<['ra'], ['ja']> = ['ra', 'ja']
type include_type<T extends any[], S> = S extends T[number] ? true : false
const test_inclued_type: include_type<['raja', 'widad', 'far'], 'real madrid'> = false

type IsEqual<T, U> =
  (<G>() => (G extends T ? 1 : 2)) extends
  (<G>() => (G extends U ? 1 : 2))
  ? true
  : false;
type my_equal<T, U> = (<G>() => G extends T ? 1 : 0) extends (<G>() => G extends U ? 1 : 0) ? true : false
type iclude_type_<T extends any[], S> = T extends [infer F, ...infer R] ? my_equal<S, F> extends true ? true : iclude_type_<R, S> : false
const kdkf: iclude_type_<['get', 'set'], 'getd'> = false
const findHouses = (houses: any[], filter: (housess: any[]) => boolean) => {
  console.log(filter)
  return false
}
function fillterHouses(h: any[]): any {
  return false
}
findHouses([], fillterHouses(['hd']))
const numbers: number[] = [1, 2, 3]
const summ = numbers.reduce(
  (c: number, b: number) => {
    let sum = c + b
    if (sum == 3) {
      console.log('summ = 3')
    }
    return c + b
  },
  2
)
function returnType<T>(S: T) {
}
function tst<T>(t: T): T {
  console.log(typeof t)
  return t
}
type Unshift<T extends any[], A> = [A, ...T]
const Unshift_testing: Unshift<[3, 4], 2> = [2, 3, 4]
const my_function = (id: number, date: Date) => { }
type Params<T extends (...args: any[]) => any> = T extends (...args: infer P) => void ? P : never
const fn = (x: number) => {
  return x > 10 ? 1 : -1
}
interface country {
  name: string,
  color: string,
  pop: number
}
type Return_Type<F extends (...args: any) => any> = F extends (...args: any) => infer R ? R : never
const test_return_type: Return_Type<typeof fn> = -1 //or 1 
type Omit_<T, O extends keyof T> = { [P in keyof T as P extends O ? never : P]: T[P] }
const testOmit: Omit_<country, "name" | "pop"> = { color: "red & green" }
type my_readonl2<T, E extends keyof T> = T & { readonly [K in keyof T as K extends E ? K : never]: T[K] }
const test_readonly2: my_readonl2<country, "color" | "pop"> = { color: "dkf", pop: 34, name: "marocco" }
test_readonly2.name = "italy"
test_readonly2.color = "red"
