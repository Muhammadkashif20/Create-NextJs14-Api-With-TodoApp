
const mockData=[
    {
        id:1,
        todos:'task1',
        isCompleted:false,
    },
    {
        id:2,
        todos:'task2',
        isCompleted:false,
    }
    ,
    {
        id:3,
        todos:'task3',
        isCompleted:false,
    }
    ,
    {
        id:4,
        todos:'task4',
        isCompleted:false,
    },
    {
        id:5,
        todos:'task5',
        isCompleted:false,
    }
    ,  {
        id:6,
        todos:'task6',
        isCompleted:false,
    }
]

export async function GET() {
    return Response.json({
        todo:mockData,
        msg:'Api Fetch Successfully'
    })
}
export async function POST(request) {
    const data = await request.json();
    const obj={
        ...data,
        isCompleted:false,
        id:mockData.length+1
    }
    mockData.push(obj)
    console.log('data from frontend to backend=>',data);
    return Response.json({
        todo:mockData,
        msg:'Todos Added Successfully'
    })
}