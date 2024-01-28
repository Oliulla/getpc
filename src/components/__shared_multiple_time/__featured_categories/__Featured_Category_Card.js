import Link from "next/link";

const FeaturedCategoryCard = ({ category }) => {
    // console.log(category)

    return (

        <Link href="/category/[...category]" as={`/category/${encodeURIComponent(category)}`}>
            <div className="border border-gray-950 shadow-cyan-800 
        hover:shadow-lg transition delay-75 w-auto cursor-pointer
         max-w-sm rounded overflow-hidden shadow-lg p-8">

                {category}
            </div>
        </Link>
    );
};

export default FeaturedCategoryCard;