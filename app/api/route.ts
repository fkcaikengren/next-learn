import { NextResponse } from 'next/server'
 
// get: api/
export async function GET() {
 
  return NextResponse.json({ name:'Gavin' })
}