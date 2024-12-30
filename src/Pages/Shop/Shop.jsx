import Cover from "../../Shared/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg"


const Shop = () => {
    return (
        <div>
            <Cover img={shopImg} title="our shop" subTitle='Would you like to try a dish?' />
        </div>
    );
};

export default Shop;