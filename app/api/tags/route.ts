 
import { NextResponse } from "next/server"
import delay from "../utils/delay"

// get: api/tags
export async function GET() {
    await delay(3000)
    return NextResponse.json({ tags:[
      {name:'next'},
      {name: 'react'},
      {name: 'Java'},
    ] })
  }
  