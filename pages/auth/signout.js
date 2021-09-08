import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'


export default function Signout() {
  if (typeof window !== 'undefined') {
    signOut({ callbackUrl: process.env.NEXTAUTH_URL })
  }
  useRouter().push('/')
  return null
}
