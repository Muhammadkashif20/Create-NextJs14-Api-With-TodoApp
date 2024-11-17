
const mockData=['task1','task2','task3','task4','task5','task6']
export async function GET() {
    return Response.json({
        todo:mockData,
        msg:'Api Fetch Successfully'
    })
}
export async function POST() {
    return Response.json({
        todo:mockData,
        msg:'Api Fetch Successfully'
    })
}