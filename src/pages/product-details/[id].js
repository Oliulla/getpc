import RootLayout from '@/components/Layouts/RootLayout';
import { loadSSGData } from '@/lib/loadSSGData';


const ProductDetailsPage = ({ product }) => {

    console.log(product)

    return (
        <div>
            This is product details page for :
        </div>
    );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


export async function getStaticPaths() {
    try {
        if (process.env.SKIP_BUILD_STATIC_GENERATION) {
            return {
                paths: [],
                fallback: 'blocking',
            };
        }

        // Fetch the possible values of id before building
        const res = await fetch(`http://localhost:3000/api/products`);

        if (!res.ok) {
            console.error(`Error fetching product data. Status: ${res.status}`);
            return {
                paths: [],
                fallback: false,
            };
        }

        const { data } = await res.json();

        // console.log(data);

        // Return an array of objects with params key
        const paths = data?.map((product) => ({
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
    const product = await loadSSGData(`product/${id}`);

    return { props: { product } };
}
