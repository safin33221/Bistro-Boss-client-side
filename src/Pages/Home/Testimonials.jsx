import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle heading="Testimonials" subheading="What Our Client Say" />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-20 w-10/12 mx-auto
            import { Navigation } from 'swiper/modules';">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>

                        <div className='m-24 flex flex-col items-center justify-center'>
                        <FaQuoteLeft className='text-6xl my-8 ' />
                            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
                            <p>{review.details}</p>
                            <h1>{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;