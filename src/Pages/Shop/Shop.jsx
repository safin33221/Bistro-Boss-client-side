import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard";
import { useParams } from "react-router-dom";


const Shop = () => {
    const categorys = ['salad','pizza','soup','desserts','drinks']
    const { category } = useParams()
    const initTab = categorys.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initTab);
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div className="pb-10">
            <Cover img={shopImg} title="our shop" subTitle='Would you like to try a dish?' />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto">
                        {
                            salad.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto">
                        {
                            pizza.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto">
                        {
                            soup.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto">
                        {
                            desserts.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto">
                        {
                            drinks.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto">
                        {
                            salad.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;