import RootLayout from '@/components/Layouts/RootLayout';
import { useRouter } from 'next/router';


const SpecificCategoryProducts = () => {
    const router = useRouter()
    const {category} = router.query ?? {};

    return (
        <div>
            specific category products : {category}
        </div>
    );
};

export default SpecificCategoryProducts;

SpecificCategoryProducts.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};