const { MongoClient, ObjectId } = require('mongodb');
// Object deconstructed from the mongodb module

const url = process.env.MONGO_URL ?? "";
const DB_Name = process.env.DB_NAME ?? 'Shopify';

const client = new MongoClient(url);

async function connect() {
    const db = await client.connect();
    return db.db(DB_Name);
}

module.exports = {
    connect, ObjectId, DB_Name
}