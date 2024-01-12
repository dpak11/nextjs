import tasks from '../../../data';

export async function GET(request, {params}){
    console.log(tasks);
    const taskDetail = tasks.find(task => Number(task.id) === Number(params.id));
    if(taskDetail){
        return new Response(JSON.stringify({taskDetail}))
    }
    return new Response(JSON.stringify({error:"Not found"}))
    
}