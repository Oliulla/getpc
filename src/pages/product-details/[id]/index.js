import RootLayout from '@/components/Layouts/RootLayout';
import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
    const router = useRouter()
    const {id} = router.query ?? {};

    return (
        <div>
            This is product details page for : {id}
        </div>
    );
};

export default ProductDetailsPage;


ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};