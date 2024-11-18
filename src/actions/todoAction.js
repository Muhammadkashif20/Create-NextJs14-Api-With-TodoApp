"use server";

import { revalidatePath } from "next/cache";

export async function addTodoForPostReq(formData){    
    const data=formData.get('todo')
    console.log('data=>',data);
    try {
       await fetch('http://localhost:3000/api/todos',{
            method:'POST',
            body:JSON.stringify({todos:data}),
        })
        revalidatePath('/Todo')
    } catch (error) {
        console.log('error=>',error);
        
    }
   
} 