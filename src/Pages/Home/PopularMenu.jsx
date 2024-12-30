import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuCard from '../../Components/MenuCard';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const populerMenu = menu.filter(item => item.category   === 'popular')
    return (
        <div className='py-5'>
            <SectionTitle heading="Form Our Menu" subheading="Populer Menu" />
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    populerMenu.map(item => <MenuCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;