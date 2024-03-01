'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GitHubIcon } from './incons'

export function AuthButton () {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header>
      <button onClick={handleSignIn}>
        <GitHubIcon />
      </button>
      <button onClick={handleSignOut}>Sign Out</button>
    </header>
  )
}
