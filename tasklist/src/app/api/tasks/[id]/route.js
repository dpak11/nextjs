import tasks from '../../../data';

export async function PATCH(request, {params}){
    console.log(tasks);
    const body = await request.json()
    
    tasks.map(task => {
        if(Number(task.id) === Number(params.id)){
            task.status = body.status
        }
    });
    return new Response(JSON.stringify({updatedList:tasks}))
}

export async function DELETE(request, {params}){
    // console.log(tasks);
    const index = tasks.findIndex(t => Number(t.id) === Number(params.id));
    tasks.splice(index,1);
    return new Response(JSON.stringify({updatedList:tasks}))
}