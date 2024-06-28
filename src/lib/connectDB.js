const { MongoClient, ServerApiVersion } = require("mongodb");
let db;

const connectDB = async () => {
  const uri = `mongodb+srv://${process.env.NEXT_API_USER}:${process.env.NEXT_API_PASS}@cluster0.4mwwnz0.mongodb.net/?appName=Cluster0`;


  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = await client.db("next-hero");
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
