const fs = require('fs');
const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const words = fs.readFileSync('./data/wlasl_class_list.txt', 'utf-8')
  .split('\n')
  .map(line => {
    const parts = line.split('\t');
    return parts.length > 1 ? parts[1].trim().toLowerCase() : null;
  })
  .filter(Boolean);

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("asl");
const collection = db.collection("words");

async function checkVideo(word) {
  const url = `https://s3-us-west-1.amazonaws.com/files.startasl.com/asldictionary/${word}.mp4`;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok ? url : null;
  } catch (err) {
    return null;
  }
}


async function generateImage(word) {
  return `https://fake-ai.com/images/${encodeURIComponent(word)}.jpg`;
}

async function run() {
  await client.connect();
  console.log("🚀 Connected to MongoDB");

  for (const word of words) {
    const exists = await collection.findOne({ word });
    if (exists) continue;

    const video = await checkVideo(word);
    if (!video) continue;

    const image = await generateImage(word);
    await collection.insertOne({ word, video, image });
    console.log(`✅ Added: ${word}`);
  }

  await client.close();
  console.log("🎉 Done!");
}

run();
