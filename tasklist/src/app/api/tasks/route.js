import tasks from '../../data';

export async function GET(request){
    console.log(tasks);
    return new Response(JSON.stringify({taskList:tasks}))
}

export async function POST(request){
    // console.log(tasks);
    const body = await request.json();
    const lastItemID = tasks.length > 0 ? tasks[tasks.length-1].id : 1;
    const auto_id = Number(lastItemID) + 1;
    tasks.push({...body.task, id: auto_id});
    return new Response(JSON.stringify({tasks}))
}