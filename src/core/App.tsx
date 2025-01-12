import BlogSection from "../components/BlogSection";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectsCompleted from "../components/ProjectsCompleted";

const App = () => {
    return (
        <main className="overflow-hidden relative">
            <Navbar />
            <Hero />
            <ProjectsCompleted />
            <Features />
            <BlogSection />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
