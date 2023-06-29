import { NextResponse } from 'next/server'
import delay from '../utils/delay'
 

// get: api/post
export async function GET() {
  const d = await delay(5000)
  return NextResponse.json({ posts:[
    {id: 1, title: '今天天气正好！'},
    {id: 2, title: '那些一眼就惊艳你的哲学句子~ - 知乎'},
  ] })
}
