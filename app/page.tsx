import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api')
  return res.json()
}




export default async function Home() {
  const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hi {data.name}, Welcom to Next13 !</h1>
    </main>
  )
}
