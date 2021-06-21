import { Stack } from "./stack.js"
import {Queue} from "./queue.js"

const queue = new Queue();

queue.push(54)
queue.push(41)

console.log(queue.shift())
console.log(queue.shift())


