// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory

// import { baseURL } from "@/config/__baseURL"

export async function loadSSGData(endPoint) {
    try {
        const res = await fetch(`/api/${endPoint}`)
        const data = await res.json()

        return data?.data
    } catch (error) {
        console.log("Fetched Failed Due To :", error)
    }
}