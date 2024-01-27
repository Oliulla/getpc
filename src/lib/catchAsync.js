export default async function sendResponse({ res, message = "No message", data = null, ...others }) {
    try {
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: message,
            others,
            data: data,
        })
    } catch (error) {
        res.status(400).json({
            statusCode: 400,
            success: false,
            message: "Internal server error",
            data: null
        })
    }
}