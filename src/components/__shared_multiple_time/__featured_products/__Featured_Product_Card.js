import Link from 'next/link';
import StarRating from '../ui/__star_ratings/__StarRatings';


const FeaturedProductCard = ({ products }) => {

    return (

        <Link href="/">
            <div
                className={`border border-gray-950 shadow-cyan-800 
                hover:shadow-lg transition delay-75 w-auto cursor-pointer
                 max-w-sm rounded overflow-hidden shadow-lg
                `
                }>
                <img className="w-full" src="https://img.freepik.com/premium-photo/cpu-central-processing-unit-microchip-isolated-white-background-with-copy-space_260418-2335.jpg?size=626&ext=jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <div className="text-gray-300 text-base flex flex-col gap-y-2">
                        <p className='flex gap-x-2'>
                            <span className='font-semibold'>Category: </span>
                            <span>CPU</span>
                        </p>
                        <p className='flex gap-x-2'>
                            <span className='font-semibold'>Price: </span>
                            <span>BTD 3000</span>
                        </p>
                        <p className='flex gap-x-2'>
                            <span className='font-semibold'>Status: </span>
                            <span>In Stock</span>
                        </p>
                    </div>
                </div>
                <>
                    <StarRating rating={4.5} />
                </>
            </div>
        </Link>
    );
};

export default FeaturedProductCard;
