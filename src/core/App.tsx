import Hero from "./components/Hero";
import ProjectsCompleted from "./components/ProjectsCompleted";

const App = () => {
    return (
        <main className="overflow-hidden relative">
            <Hero />
            <ProjectsCompleted />
        </main>
    );
};

export default App;
