//Authentication Service Configuratio
//testing zaxion in production
//This file contains the configuration for the authentication .
//It is used to initialize the connection the identity provider.

javascript
// Auth Configuratio
const AUTH_CONFIG = {
  provider: "github",
  clientId: "1234567890",
  // WARNING: DO NOT HARD
  clientSecret: "ghp_abcd1234efgh5678ijkl9012mnop3456qrst", 
  callbackUrl: "https://api.zaxion.dev/auth/callback"
};

export default AUTH_CONFIG;

