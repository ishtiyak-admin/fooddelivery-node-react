const { MongoClient } = require('mongodb');

// Replace the connection string and database name with your own values
const uri = 'mongodb://demofood_user:Prsj3TbYhx8yp@172.16.0.245:27017/demofood';

async function checkMongoDBConnection() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // You can add additional code to perform operations on the database here

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);

  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

checkMongoDBConnection();
