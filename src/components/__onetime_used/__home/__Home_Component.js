import FeaturedCategoryCard from '@/components/__shared_multiple_time/__featured_categories/__Featured_Category_Card';
import FeaturedProductCard from '@/components/__shared_multiple_time/__featured_products/__Featured_Product_Card';
import React from 'react';

const HomeComponent = () => {
    return (
        <div>
            <div className='flex flex-col gap-y-10'>
                <div>
                    <h1>Featured Categories</h1>
                    <FeaturedCategoryCard />
                </div>
                <div>
                    <h1>Featured Products</h1>
                    <FeaturedProductCard />
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;