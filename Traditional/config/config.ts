export default {
    jwtSecret: process.env.JWT_KEY || 'somesecrettoken',
    DB: {
      URI: process.env.MONGO_URI || 'mongodb://localhost/mono-erp-backend'
    }
  };
  