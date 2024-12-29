import React from 'react';

const MenuCard = ({item }) => {
    const {name,image, price ,recipe} = item
    return (
        <div className='flex justify-between w-fit gap-5 py-3'>
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt=""  className='w-24'/>
            <div>
                <h1 className='uppercase font-bold'>{name}-------------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuCard;