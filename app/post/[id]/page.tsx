
async function getPost(id:string){
    const res = await fetch(`http://localhost:3000/api/post/${id}`, {next: {revalidate:0}})
    return res.json()
}

export default async function Post({ params }: { params: { id: string } }){
    console.log(params)
    const data = await getPost(params.id)
    
    return <div className="min-h-screen flex flex-col px-4 ">
        <div className="rounded bg-white">{data.content}</div>
       
    </div>
}
