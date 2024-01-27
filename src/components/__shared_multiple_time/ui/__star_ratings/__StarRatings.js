import { FaStar, FaStarHalf } from "react-icons/fa6";


const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalf key="half" className="text-yellow-500" />);
        }
        return stars;
    };

    return <div className="px-6 pt-4 pb-2 flex gap-x-1">{renderStars()}</div>;
};

export default StarRating;