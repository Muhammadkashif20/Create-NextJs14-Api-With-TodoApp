
const page = async() => {
    let getData=await fetch('http://localhost:3000/api/todos')
    getData=await getData.json()
    console.log('getData=>',getData);
  return (
    <div>
      <h1 className='font-bold text-3xl text-center my-5'>Todos</h1>
      {getData.todo?.map((todo)=>{
        return(
            <h1 className="border border-blue-400 p-3 text-center w-2/3 mx-52 m-3">{todo}</h1>
        )
      })}
    </div>
  )
}

export default page
