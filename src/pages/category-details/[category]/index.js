import RootLayout from '@/components/Layouts/RootLayout';
import { useRouter } from 'next/router';

const CategoryDetailsPage = () => {
    const router = useRouter()
    const {category} = router.query ?? {};

    return (
        <div>
            This is product details page for : {category}
        </div>
    );
};

export default CategoryDetailsPage;


CategoryDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};