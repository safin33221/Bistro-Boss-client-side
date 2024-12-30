import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Cover img={menuImg} title="Our Menu" subTitle="Would you like to try a dish?" />
            <section className='w-11/12 mx-auto'>
                <PopularMenu />
            </section>
        </div>
    );
};

export default Menu;