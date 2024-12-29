import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import img from '../../assets/home/featured.jpg'
import '../Style.css'
const Featured = () => {
    return (
        <div className='featured my-10 pb-16 bg-fixed bg-black bg-blend-overlay  bg-opacity-60 '>
            <SectionTitle subheading="Check it out" heading=" Form Our Menu"/>
            <div className='flex justify-center items-center gap-10 text-white'>
                <div className=''>
                    <img className='w-[400px]' src={img} alt="" />
                </div>
                <div className='w-1/2'>
                    <h3>March 20,2023</h3>
                    <h1 className="uppercase">Where can i get some</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse quaerat illo, dolorem tempora fugiat!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;