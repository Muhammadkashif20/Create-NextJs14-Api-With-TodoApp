
const TodoLists = ({todo}) => {
  return (
    <div className={`flex mx-52  border border-gray-300 rounded  p-3 text-center m-2  flex-grow w-2/3  cursor-pointer  ${todo.isCompleted?'bg-teal-50':'bg-white'}`} >
      <h1 className="flex items-center flex-grow ">
      {todo.todos}
      </h1>
        <div>
        <button className="p-3 rounded  bg-purple-300 ms-2 cursor-pointer w-[6rem]">{!todo.isCompleted?'Done':'Not Done'}</button>
        <button className="p-3 rounded  bg-blue-300 ms-2 cursor-pointer ">Edit</button>
        <button className="p-3 rounded  bg-red-300  ms-2 cursor-pointer ">Delete</button>
        </div>
    </div>
  );
};

export default TodoLists;
