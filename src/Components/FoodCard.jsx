import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className=' border-2 bg-base-200 flex items-center relative rounded-t-lg flex-col'>
            <img src={image} alt="" className='w-full rounded-t-lg ' />
            <p className='text-yellow-600 btn bg-[#000000] absolute right-4 top-4'>${price}</p>
            <div className='m-4'>
                <h1 className='uppercase font-bold'>{name}</h1>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default FoodCard;