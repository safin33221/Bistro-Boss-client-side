import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import SectionTitle from '../../Components/SectionTitle';
const Category = () => {
    return (
        <div>
            <SectionTitle heading={"ORDER ONLINE"} subheading={"From 11:00am to 10:00pm"}>

            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide><img src={slide1} className='w-10/12  mx-auto h-96 relative' alt="" /> <h1 className='text-black text-3xl font-bold absolute top-1/2 left-1/2'>salad</h1></SwiperSlide>
                <SwiperSlide><img src={slide2} className='w-10/12  mx-auto h-96 relative' alt="" /> <h1 className='text-black text-3xl font-bold absolute top-1/2 left-1/2'>Soups</h1></SwiperSlide>
                <SwiperSlide><img src={slide3} className='w-10/12  mx-auto h-96 relative' alt="" /> <h1 className='text-black text-3xl font-bold absolute top-1/2 left-1/2'>Pizza</h1></SwiperSlide>
                <SwiperSlide><img src={slide4} className='w-10/12  mx-auto h-96 relative' alt="" /> <h1 className='text-black text-3xl font-bold absolute top-1/2 left-1/2'>Desserts</h1></SwiperSlide>
                
            </Swiper>


            {/* <div className="bg-[url('../../assets/home/chef-service.jpg')] h-[200px]">

            </div> */}
        </div>
    );
};

export default Category;