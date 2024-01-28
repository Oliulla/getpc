import sendResponse from "@/lib/catchAsync";
import clientPromise from "@/lib/mongodb";


export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("get_pc");

    // // Products collection
    const productCollection = db.collection("products")

    switch (req.method) {
        case "POST":
            let bodyObject = JSON.parse(req.body);
            let product = await productCollection.insertOne(bodyObject);
            sendResponse({
                res,
                message: "Successfully post your product",
                data: product
            })
            break;
        case "GET":
            const limit = req.query.limit
            const products = await productCollection.find().limit(+limit).toArray();
            sendResponse({
                res,
                message: "Successfully retrived all products.",
                data: products,
                total: products.length
            })
            break;
    }
}