const Hero = () => {
    return (
        <section className="relative mt-20 bg-[url('/header-background.png')] bg-top bg-no-repeat">
            <div className="bg-transperent-hero rounded-3xl bg-opacity-[.75] max-container font-primary ">
                <div className="relative px-5 py-10 z-[100]">
                    <h1 className="text-6xl">
                        We build <br className="lg:hidden" />
                        <span className="text-blue-400">products</span> that
                        shape a better future
                    </h1>
                    <p className="py-6 text-gray-400">
                        We’re the architects of digital excellence across
                        industries. We redefine business with cutting-edge
                        digital strategies that invokes sector-wide
                        transformation.
                    </p>
                    <button className="mb-10 bg-white text-black py-3 px-5 rounded-full relative after:absolute after:w-full after:h-full after:top-3 after:bg-red-500 after:-left-2 after:rounded-full after:-z-[5] after:bg-transparent after:border-2 after:border-dotted">
                        Book a call
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
