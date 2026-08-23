const TodoCard = ({todo}) => {
  return (
    <div
      className="border border-pink-800 rounded-md shadow-md mb-2 p-4 font-medium"
    >
      <span>
        {todo.id}. {todo.title}
      </span>
    </div>
  );
};
export default TodoCard;
