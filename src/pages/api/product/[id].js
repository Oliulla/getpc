import sendResponse from "@/lib/catchAsync";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("get_pc");

    // // Products collection
    const productCollection = db.collection("products")

    switch (req.method) {
        case "GET":
            const { id } = req.query
            const product = await productCollection.findOne({ _id: new ObjectId(id) });
            // console.log(product)
            sendResponse({
                res,
                message: "Successfully retrived this product.",
                data: product,
            })
            break;
    }
}