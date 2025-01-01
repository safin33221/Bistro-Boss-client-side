import React from 'react';
import MenuCard from '../../Components/MenuCard';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-10'>
            {title && <Cover img={coverImg} title={title} />}
            <div className='grid md:grid-cols-2 gap-5 w-10/12 mx-auto my-10' >
                {
                    items.map(item => <MenuCard key={item._id} item={item} />)
                }
            </div>
            <Link to={`/shop/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 text-black block mx-auto">ORDER NOW</button>
            </Link>
        </div>
    );
};

export default MenuCategory;