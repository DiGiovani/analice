import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  const router = useRouter();

  return (
    <div className={styles.container}>
      {session ?
        
        <>
          <h1>Obrigado {session.user.name} por fazer seu cadastro na <b>Analice</b>!</h1>
        </>
        :
        <>
          <h1 className={styles.signUp}><b>Analice</b></h1>
          <button onClick={() => router.push('https://analiceunica.b2clogin.com/analiceunica.onmicrosoft.com/B2C_1_signup-analice/oauth2/v2.0/authorize?response_type=code+id_token&response_mode=form_post&scope=offline_access%20openid&redirect_uri=https%3A%2F%2Fanalice.unicainstancia.com.br%2Fapi%2Fauth%2Fcallback%2Fazureb2c&client_id=72c63f0b-2995-4ab6-849e-be9b4f94c35e')} className={styles.signupButton} type="button">
            Cadastre-se
          </button>
          <p>Já tem cadastro? Faça seu <a href="https://analiceunica.b2clogin.com/analiceunica.onmicrosoft.com/B2C_1_analice/oauth2/v2.0/authorize?response_type=code+id_token&response_mode=form_post&scope=offline_access%20openid&redirect_uri=https%3A%2F%2Fanalice.unicainstancia.com.br%2Fapi%2Fauth%2Fcallback%2Fazureb2c&client_id=72c63f0b-2995-4ab6-849e-be9b4f94c35e">login</a>!</p>
        </>
        
      }
    </div>
  )
}
