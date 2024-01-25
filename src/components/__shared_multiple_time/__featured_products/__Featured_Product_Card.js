import Link from 'next/link';
import React, { useState } from 'react';

const FeaturedProductCard = () => {
    const [id, setId] = useState("");

    return (
        <div>
            <div className='grid grid-cols-4 gap-2'>
                {Array.from({ length: 10 }, (_, idx) => (
                    <div 
                    key={idx} 
                    className={`border border-gray-950 shadow-cyan-800 
                    shadow-2xl hover:shadow-lg transition delay-75 w-auto cursor-pointer
                    min-h-[380px] rounded-sm
                    `
                    }>
                        <div>
                            Each Featured product card should display the following properties:
                            <Link href={`/product-details/${id}`} className='text-blue-600 underline'>
                                Image
                                Product Name
                                Category
                                Price
                            </Link>
                            Status ( In Stock | Out of stock)
                            Rating (Out of 5 Stars)
                            Each featured product will be clickable and should take the user to the product detail page. (Button/Entire Card)
                        </div>
                        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProductCard;
