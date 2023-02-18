'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 h-screen flex flex-col items-center justify-center text-center">
      <Image src="/assets/logo.png" width={300} height={300} alt="logo" />
      <button
        className="font-bold text-3xl animate-pulse text-green-500"
        type="button"
        onClick={() => signIn('google')}
      >
        Connectez-vous pour utiliser ChatGPT
      </button>
    </div>
  )
}

export default Login
