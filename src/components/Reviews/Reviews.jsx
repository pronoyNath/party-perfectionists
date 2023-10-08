import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])




    return (
        <div>
            <div className='mt-20'>
                <h3 className='font-semibold text-2xl text-center underline text-violet-500'>Some of Best Reviews</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                {
                    reviews?.map(userRating => <ReviewCard key={userRating.id} userRating={userRating}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;