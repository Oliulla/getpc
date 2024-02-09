import RootLayout from '@/components/Layouts/RootLayout';
import { loadSSGData } from '@/lib/loadSSGData';
// import { baseURL } from '@/config/__baseURL';
// import { loadSSGData } from '@/lib/loadSSGData';


const ProductDetailsPage = ({ product }) => {


    return (
        <div>
            This is product details page for : {product?._id}
        </div>
    );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


export async function getStaticPaths() {
    try {
        const products = await loadSSGData("product")

        // Return an array of objects with params key
        const paths = products?.map((product) => ({
            params: { id: product._id },
        }));

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error("Error fetching product data:", error);
        return {
            paths: [],
            fallback: false,
        };
    }
}



export async function getStaticProps({ params }) {
    const { id } = params;
    const product = await loadSSGData(`product/${id}`)

    return { props: { product } };
}
