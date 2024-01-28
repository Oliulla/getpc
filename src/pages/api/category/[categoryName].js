import sendResponse from "@/lib/catchAsync";
import clientPromise from "@/lib/mongodb";


export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("get_pc");

    // Category collection
    const productCollection = db.collection("products")

    switch (req.method) {
        case "GET":
            const { categoryName } = req.query
            const products = await productCollection.find({ category: categoryName }).toArray();
            sendResponse({
                res,
                message: `Successfully retrived all products for ${categoryName}.`,
                data: products,
            })
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