import { useRouter } from 'next/router'

export default function SignIn() {
  useRouter().push('https://analiceunica.b2clogin.com/analiceunica.onmicrosoft.com/B2C_1_analice/oauth2/v2.0/authorize?response_type=code+id_token&response_mode=form_post&scope=offline_access%20openid&redirect_uri=https%3A%2F%2Fanalice.vercel.app%2Fapi%2Fauth%2Fcallback%2Fazureb2c&client_id=72c63f0b-2995-4ab6-849e-be9b4f94c35e')
  return (
    <div>

    </div>
  )
}