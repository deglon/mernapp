module.exports = {
    database: {
      URI: process.env.MONGODB_URI || 'mongodb+srv://ouetwi:<deglon>@cluster0.nwb3zca.mongodb.net/'
    },
    jwtSecret: process.env.JWT_SECRET || 'jwt-key' // Replace with your actual secret key
  };