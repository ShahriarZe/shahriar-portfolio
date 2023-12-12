import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import TechnicalSkills from "../Skills/TechnicalSkills";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
            <TechnicalSkills></TechnicalSkills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;