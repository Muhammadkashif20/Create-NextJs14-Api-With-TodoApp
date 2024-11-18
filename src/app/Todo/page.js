import { addTodoForPostReq } from "@/actions/todoAction";
import TodoForm from "@/components/TodoForm";
import TodoLists from "@/components/TodoLists";
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
          <TodoLists todo={todo} key={todo.id}/>
        )
      })}
    </div>
  )
}

export default page
