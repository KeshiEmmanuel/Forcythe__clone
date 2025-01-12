import AnimatedProjects from "./AnimatedProjects";
const ProjectsCompleted = () => {
    return (
        <section className="pt-10">
            <div className="mt-16">
                <h1 className="text-center text-3xl lg:text-fit font-primary">
                    Success in <span className="text-blue-400">Motion</span> –
                    Our clients’ journey
                </h1>

                <AnimatedProjects
                    containerClasses="mt-10"
                    animationType="animate-infinite-scroll"
                />
                <AnimatedProjects
                    containerClasses="-mt-10"
                    animationType="animate-opposite-infinite-scroll"
                />
            </div>
        </section>
    );
};

export default ProjectsCompleted;
