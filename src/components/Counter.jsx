import { useState } from "react"

const Counter = () => {
  // count -> state name
  // setCounr -> use to update state value
  // 0 -> initial value assign to state
  const [count, setCount] = useState(0)

  // function to add count by 1
  const increment = () => {
    setCount(count + 1)
  }

  // function to decrease count by 1
  const decrement = () => {
    setCount(count - 1)
  }

  // function to reset count to 0
  const reset = () => {
    setCount(0)
  }

  return (
    <div className="m-4 border border-gray-500 shadow-md rounded-md p-8 w-fit">
      <h1 className="text-teal-700 font-bold text-2xl text-center mb-6">
        Counter App
      </h1>

      <p className="text-xl font-bold text-center text-gray-500">{count}</p>

      <div className="mt-6 space-x-4">
        <button onClick={increment} className="btn">
          add
        </button>
        <button onClick={decrement} className="btn">
          subtract
        </button>
        <button onClick={reset} className="btn">
          reset
        </button>
      </div>
    </div>
  )
}
export default Counter
