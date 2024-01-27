import FeaturedCategoryCard from '@/components/__shared_multiple_time/__featured_categories/__Featured_Category_Card';
import FeaturedProductCard from '@/components/__shared_multiple_time/__featured_products/__Featured_Product_Card';

const HomeComponent = ({ ssgData }) => {

    const { products, categories } = ssgData;

    // console.log("data from home com", products, "\n", categories)

    return (
        <div className='py-4'>
            <div className='flex flex-col gap-y-10'>
                <div className='mx-auto'>
                    <h1 className='text-3xl font-semibold inline border-b-2 border-blue-400'>Featured Products</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-2'>
                        {
                            products.map((product) => (
                                <div key={product._id}>
                                    <FeaturedProductCard products={products} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold inline border-b-2 border-blue-400'>Featured Categories</h1>
                    <div className='grid grid-cols-4 gap-2 mt-2'><FeaturedCategoryCard categories={categories} /></div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;