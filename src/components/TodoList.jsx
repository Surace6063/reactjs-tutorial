import { moreTodos, todos } from "../data/todolist"
import TodoCard from "./TodoCard"

const TodoList = () => {
  return (
    <div className="px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Todo list
        </h3>

        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                todos.map(todo => (
                   <TodoCard key={todo.id} todo={todo} />
                ))
            }
        </div>

         <h3 className="text-2xl font-bold text-gray-800 my-4">
            More Todo list
        </h3>

        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                moreTodos.map(todo => (
                    <TodoCard key={todo.id} todo={todo} />
                ))
            }
        </div>
    </div>
  )
}
export default TodoList