import { NextResponse } from 'next/server'
 
// get: api/post/[id]
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    if(params.id==='1'){
        return NextResponse.json({ content: 
        '我看了很多这样的哲学句子，最后的结果是我成了一个彻彻底底的怀疑论者，对一切保持怀疑，谁能说这些句子对我们有益呢？原本坚信的土崩瓦解，再也不能做出具体的判断了，行为没有指导了' })
    }else if(params.id === '2')
        return NextResponse.json({ content:
        `1.教育的目的是让学生们摆脱现实的奴役，而现在的年轻人正意图做着相反的努力，为了适应现实而改变自己。
        ——西塞罗
        2.我们听到的一切都是一个观点，不是事实，我们看到的一切都是一个视角，不是真相。
        ——《沉思录》` })
}