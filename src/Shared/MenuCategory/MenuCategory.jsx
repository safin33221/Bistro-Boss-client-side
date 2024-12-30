import React from 'react';
import MenuCard from '../../Components/MenuCard';
import Cover from '../Cover/Cover';

const MenuCategory = ({items ,title,coverImg }) => {
    return (
        <div className='my-10'>
            { title &&  <Cover img={coverImg} title={title} />}
            <div className='grid md:grid-cols-2 gap-5 w-10/12 mx-auto my-10' >
                {
                    items.map(item => <MenuCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;