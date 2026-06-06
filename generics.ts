function wrap<Value>(data: Value): Value[] {
  return [data];
}

const nums = wrap(5); // number[]
const strs = wrap("hi"); // string[]

console.log(typeof nums)
console.log(typeof strs)