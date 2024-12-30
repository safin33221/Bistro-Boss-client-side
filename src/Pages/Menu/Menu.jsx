import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import saladtImg from "../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"

import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Cover img={menuImg} title="Our Menu" subTitle="Would you like to try a dish?" />

            <section>
                <SectionTitle heading="Today's offers" subheading="Don't miss" />
                <div className=''>
                    <MenuCategory items={offered} />
                </div>
            </section>


            <MenuCategory items={desserts} title="Desserts" coverImg={dessertImg} />
            <MenuCategory items={salad} title="salad" coverImg={saladtImg} />
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg} />
        
            <MenuCategory items={soup} title="soup" coverImg={soupImg} />

        </div>
    );
};

export default Menu;