import Banner from "./Banner";
import Category from "./Category";



const Home = () => {
    return (
        <div>
            <Banner/>
            <section className="w-10/12 mx-auto">
            <Category/>
            </section>
        </div>
    );
};

export default Home;