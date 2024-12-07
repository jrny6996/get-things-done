//@ts-nocheck

import { createClient } from '../utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div>
    <h1>Hello</h1>
    <ul>
      {todos?.map((todo: any) => (
        <li>{todo}</li>
      ))}
    </ul>
    </div>
  )
}