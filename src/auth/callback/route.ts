import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })
}
