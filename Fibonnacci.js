function Fibonacci(term){
  let prev = 0
  let curr = 1
  let next = 0
  let arr = [0,1]
  for(let i =1; i<term; i++){
    next = curr+prev
    prev = curr
    curr = next
    arr.push(curr)
  }
  console.log(arr.pop())
}

Fibonacci(11)