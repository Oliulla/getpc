import Link from "next/link";

const FeaturedCategoryCard = () => {

    return (

        <div>
            <div className='Card'>
                There should be 6 Featured Categories under the Featured Product section. The Categories are:
                <Link href={`/category-details/${2}`} className='text-blue-600 underline'>
                    CPU / Processor
                    Motherboard
                    RAM
                    Power Supply Unit
                    Storage Device
                    Monitor
                    Others (GPU, Mouse, Keyboard, etc…)
                </Link>
                Featured Category Sections: (SSG implementation)
                Each featured category should be clickable.
                Clicking on any of the Featured Categories will redirect the user to another page where at least 3 products of that category will be displayed.
                Each product card on this page should show the following properties:
                Image
                Product Name
                Category
                Price
                Status ( In Stock | Out of stock)
                Rating (Out of 5 Stars)
                Each product retrieved after querying on this page will also be clickable and should take the user to the product detail page.
            </div>
        </div>
    );
};

export default FeaturedCategoryCard;