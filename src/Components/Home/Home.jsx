import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import TechnicalSkills from "../Skills/TechnicalSkills";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <TechnicalSkills></TechnicalSkills>
            <Contact></Contact>
        </div>
    );
};

export default Home;