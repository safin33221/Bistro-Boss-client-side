import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuCard from '../../Components/MenuCard';

const PopularMenu = () => {
    const [items,setItem] = useState([])
    useEffect(() =>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            const populerItems  = data.filter(item => item.category === 'popular')
            setItem(populerItems)
        })

    }, [])
    return (
        <div className='py-5'>
            <SectionTitle heading="Form Our Menu" subheading="Populer Menu" />
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    items.map(item =><MenuCard key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;