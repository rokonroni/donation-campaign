import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../../components/Donations/Donations";

const Home = () => {
    
    const donations = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Donations donations = {donations}></Donations>
        </div>
    );
};

export default Home;