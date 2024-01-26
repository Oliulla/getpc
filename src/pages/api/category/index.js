import clientPromise from "@/lib/mongodb";


export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("get_pc");

  // Categories collection
  const categoryCollection = db.collection("categories");

  // // Products collection
  // const productCollection = db.collection("categories")

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let categories = await categoryCollection.insertOne(bodyObject);
      res.json(categories.ops[0]);
      break;
    case "GET":
      const allPC = await categoryCollection.find({}).toArray();
      res.status(200).json({ statusCode: 200, message: "Successfully retrived.", data: allPC });
      break;
  }
}