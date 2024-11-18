import { addTodoForPostReq } from "@/actions/todoAction";
import TodoForm from "@/components/TodoForm";
import Link from "next/link";

const page = async() => {
    let getData=await fetch('http://localhost:3000/api/todos',{
      cache:'no-cache',
    })
    getData=await getData.json()
    console.log('getData=>',getData);
  return (
    <div>
      <h1 className='font-bold text-3xl text-center my-5'>Todos</h1>
     <TodoForm/>
      {getData.todo?.map((todo)=>{
        return(
          <Link key={todo.id} href={`Todo/${todo.id}`}> 
            <div className="flex justify-center"> 
            <h1 className="border border-gray-300 rounded text-gray-500 p-3 text-center m-3 flex w-2/4 items-center text-">{todo.todos}</h1>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default page
