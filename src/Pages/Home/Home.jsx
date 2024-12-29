import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";



const Home = () => {
    return (
        <div>
            <Banner />
            <section className="w-10/12 mx-auto">
                <Category />
                <PopularMenu />
            </section>
            <Featured/>
        </div>
    );
};

export default Home;