import NextAuth from 'next-auth'

const tenantName = process.env.AUTH_TENANT_NAME
const tenantGuid = process.env.AUTH_TENANT_GUID
const userFlow = process.env.USER_FLOW

const options = {
  session: {
    jwt: true,
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signOut: '/auth/signout',
    signIn: 'https://analiceunica.b2clogin.com/analiceunica.onmicrosoft.com/B2C_1_analice/oauth2/v2.0/authorize?response_type=code+id_token&response_mode=form_post&scope=offline_access%20openid&redirect_uri=https%3A%2F%2Fanalice.unicainstancia.com.br%2Fapi%2Fauth%2Fcallback%2Fazureb2c&client_id=72c63f0b-2995-4ab6-849e-be9b4f94c35e'   
  },
  providers: [
    {
      id: 'azureb2c',
      name: 'Azure B2C',
      type: 'oauth',
      version: '2.0',
      debug: true,
      scope: 'offline_access openid',
      params: {
        grant_type: 'authorization_code',
      },
      accessTokenUrl: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${userFlow}/oauth2/v2.0/token`,
      requestTokenUrl: `https://login.microsoftonline.com/${process.env.AUTH_TENANT_GUID}/oauth2/v2.0/token`,
      authorizationUrl: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${userFlow}/oauth2/v2.0/authorize?response_type=code+id_token&response_mode=form_post`,
      profileUrl: 'https://graph.microsoft.com/oidc/userinfo',
      profile: (profile) => {
        console.log('THE PROFILE', profile)

        return {
          id: profile.oid,
          fName: profile.given_name,
          lName: profile.surname,
          email: profile.emails.length ? profile.emails[0] : null,
        }
      },
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      idToken: true,
      state: false,
    },
  ],
}

export default (req, res) => NextAuth(req, res, options)
