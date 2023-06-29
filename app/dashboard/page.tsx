import Link from "next/link"
import { Suspense, useState } from "react";
import Loading from "../loading";
import AddButton from "./components/AddButton";
// import Loading from "../loading";

interface Post{
    id: number;
    title: string
}

async function getTags() {
    const res = await fetch('http://localhost:3000/api/tags', {next: {revalidate:0}})
    return res.json()
}

async function getPosts() {
    const res = await fetch('http://localhost:3000/api/post', {next: {revalidate:0}})
    return res.json()
}
   
async function Tags(){
    const data = await getTags()
    return <div>
        <div className="flex items-center">
        {
            data.tags.map((tag:{name:string})=>(
                <div key={tag.name} className="mr-2">{tag.name}</div>
            ))
        }
        </div>
        <AddButton></AddButton>
    </div>
} 

async function Posts(){
    const data = await getPosts()
    return <ul>
    {
        data.posts.map((post:Post)=>(
        <li key={post.id} >
            <Link href={`/post/${post.id}`} className='underline'>{post.title}</Link>
        </li>
        ))
    }
    </ul>
} 


export default async function Dashboard(){
    
    return <div className="min-h-screen flex flex-col px-4">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <h2 className="text-lg">我的标签：</h2>
        <Suspense fallback={<Loading></Loading>}>
            <Tags></Tags>
        </Suspense>
        <h2 className="text-lg">我的博客：</h2>
        <Suspense fallback={<Loading></Loading>}>
            <Posts></Posts>
        </Suspense>
        
    </div>
}

