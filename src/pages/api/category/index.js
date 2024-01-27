import sendResponse from "@/lib/catchAsync";
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
      let category = await categoryCollection.insertOne(bodyObject);
      sendResponse({
        res,
        message: "Successfully post your category",
        data: category
      })
      break;
    case "GET":
      const categories = await categoryCollection.find({}).toArray();
      sendResponse({
        res,
        message: "Successfully retrived all category.",
        data: categories
      })
      break;
  }
}