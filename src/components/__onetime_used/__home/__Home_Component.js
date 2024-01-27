import FeaturedCategoryCard from '@/components/__shared_multiple_time/__featured_categories/__Featured_Category_Card';
import FeaturedProductCard from '@/components/__shared_multiple_time/__featured_products/__Featured_Product_Card';

const HomeComponent = () => {
    return (
        <div className='py-4'>
            <div className='flex flex-col gap-y-10'>
                <div>
                    <h1 className='text-3xl font-semibold inline border-b-2 border-blue-400'>Featured Products</h1>
                    <div className='mt-2'><FeaturedProductCard /></div>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold inline border-b-2 border-blue-400'>Featured Categories</h1>
                    <div className='mt-2'><FeaturedCategoryCard /></div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;