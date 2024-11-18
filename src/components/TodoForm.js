'use client'
import { addTodoForPostReq } from '@/actions/todoAction'
import { useRef } from 'react'
const TodoForm = () => {
    const FormReference=useRef(null)
  return (
    <div>
       <form ref={FormReference} action={async(formData)=> {await addTodoForPostReq(formData);
        FormReference.current?.reset()
       }} className=" flex justify-center mb-6" >
        <div className=" flex w-full max-w-3xl items-center">
          <input
           className="border border-gray-300 p-3 rounded w-[47rem]"
           name="todo"
           placeholder="Enter Your Todo"
           />
          <input type="submit" value={'Add Todo'} className="p-3 rounded  bg-purple-300 ms-2 cursor-pointer"/>
           </div>
      </form>
    </div>
  )
}

export default TodoForm
