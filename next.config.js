require('dotenv').config()

module.exports = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
    AUTH_CLIENT_SECRET: process.env.AUTH_CLIENT_SECRET,
    AUTH_TENANT_NAME: process.env.AUTH_TENANT_NAME,
    AUTH_TENANT_GUID: process.env.AUTH_TENANT_GUID,
    JWT_SECRET: process.env.JWT_SECRET,
    USER_FLOW: process.env.USER_FLOW,
  }
}

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};