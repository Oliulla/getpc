import Link from 'next/link';
import StarRating from '../ui/__star_ratings/__StarRatings';
import Image from 'next/image';


const FeaturedProductCard = ({ product }) => {

    const { _id, image, name, category, price, status, average_ratings } = product ?? {};

    return (

        <Link href={`/product-details/${_id}`}>
            <div
                className={`border border-gray-950 shadow-cyan-800 
                hover:shadow-lg transition delay-75 w-auto cursor-pointer
                 max-w-sm rounded overflow-hidden shadow-md
                `
                }>
                <img width={1} height={1} className="w-full" src={image} alt={name} style={{ width: "auto", height: "auto" }} />
                <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2">{name}</p>
                    <div className="text-gray-300 text-base flex flex-col gap-y-2">
                        <p className='flex gap-x-2'>
                            <span className='font-semibold'>Category: </span>
                            <span>{category}</span>
                        </p>
                        <p className='flex gap-x-2'>
                            <span className='font-semibold'>Price: </span>
                            <span>BTD {price}</span>
                        </p>
                        <p className='flex gap-x-2'>
                            <span className='font-semibold'>Status: </span>
                            <span className='text-blue-400'>{status}</span>
                        </p>
                    </div>
                </div>
                <>
                    <StarRating rating={average_ratings} />
                </>
            </div>
        </Link>
    );
};

export default FeaturedProductCard;
