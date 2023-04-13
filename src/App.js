import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="max-w-full mx-[0px] h-auto text-white">
      <div className="max-w-screen-2xl mx-auto px-[16px]">
        <Navbar/>
        <div className="">
        <Banner/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contacts/>
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
