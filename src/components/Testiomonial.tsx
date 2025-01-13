import TestiomonialTabs from "./TestiomonialTabs";

const Testiomonial = () => {
    return (
        <section className="section-padding font-primary">
            <div className="max-container">
                <h2 className="text-3xl text-center lg:text-5xl lg:w-[900px] lg:mx-auto">
                    Discover the
                    <span className="text-blue-400 mx-2">
                        transformative stories
                    </span>
                    of startups that <br className="lg:hidden" /> scaled new
                    heights with us
                </h2>
            </div>
            <div className="mt-10">
                <TestiomonialTabs />
            </div>
        </section>
    );
};

export default Testiomonial;