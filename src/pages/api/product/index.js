import sendResponse from "@/lib/catchAsync";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("get_pc");

    // Products collection
    const productCollection = db.collection("products");

    switch (req.method) {
        case "POST":
            try {
                let bodyObject = JSON.parse(req.body);
                let product = await productCollection.insertOne(bodyObject);
                sendResponse({
                    res,
                    message: "Successfully post your product",
                    data: product
                });
            } catch (error) {
                console.error("Error posting product:", error);
                sendResponse({
                    res,
                    statusCode: 500,
                    message: "Internal Server Error",
                });
            }
            break;
        case "GET":
            const limit = req.query.limit;

            const products = await productCollection.find().limit(+limit).toArray();

            sendResponse({
                res,
                message: "Successfully retrieved all products.",
                data: products,
                total: products.length
            });

            break;
        default:
            sendResponse({
                res,
                statusCode: 405,
                message: "Method Not Allowed",
            });
            break;
    }
}
