import BlogSection from "../components/BlogSection";
import Contact from "../components/Contact";
import DevelopementLifeCycle from "../components/DevelopementLifeCycle";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectsCompleted from "../components/ProjectsCompleted";
import Testiomonial from "../components/Testiomonial";

const App = () => {
    return (
        <main className="overflow-hidden relative">
            <Navbar />
            <Hero />
            <ProjectsCompleted />
            <Testiomonial />
            <DevelopementLifeCycle />
            <Features />
            <BlogSection />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
