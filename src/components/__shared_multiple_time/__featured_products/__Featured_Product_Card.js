import Link from 'next/link';
import React, { useState } from 'react';

const FeaturedProductCard = () => {
    const [id, setId] = useState(null);

    return (
        <div>
            <div className='Card'>Each Featured product card should display the following properties:
                <Link href={`/product-details/${id}`} className='text-blue-600 underline'>Image
                    Product Name
                    Category
                    Price</Link>
                Status ( In Stock | Out of stock)
                Rating (Out of 5 Stars)
                Each featured product will be clickable and should take the user to the product detail page. (Button/Entire Card)
            </div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        </div>
    );
};

export default FeaturedProductCard;