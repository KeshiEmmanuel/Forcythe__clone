import { FeaturesWriteUp, FulifmentStats } from "../data";
import FeatureCard from "./FeatureCard";
import HighlightedText from "./HighlightedText";
import StatCard from "./StatCard";

export default function Features() {
    return (
        <div className="relative">
            <div className=" blue-gradient absolute top-0 left-0 w-full h-full lg:h-[500px]" />
            <section className="relative">
                <div className="flex flex-col">
                    <div className="flex flex-col max-container h-full">
                        <div className="mt-16">
                            <h1 className="font-primary text-center text-3xl text-blue-200">
                                Your best call for B2B/B2C product innovation
                            </h1>

                            <div className="mt-10 grid grid-cols-1 gap-5  md:grid-cols-3">
                                {FeaturesWriteUp.map((feature) => (
                                    <FeatureCard
                                        feature={feature}
                                        key={feature.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="stat-gradient relative lg:mt-12 h-full md:mt-32 lg:h-[400px] pt-24 mt-28  md:pt-8">
                        <img
                            src="/website/arc-L.svg"
                            alt="arc"
                            className="absolute md:top-12 top-10  left-0 w-full md:w-fit md:h-fit lg:mx-auto lg:max-w-[800px] lg:inset-x-72"
                        />
                        <div className="lg:max-w-[500px] lg:mx-auto md:pt-36 lg:pt-[250px]">
                            <h1 className="font-primary md:text-3xl lg:text-3xl lg:w-full  text-center px-[3.1rem] lg:px-0 text-lg">
                                We build solutions that help
                                <br className="lg:hidden" />
                                <HighlightedText className="px-1">
                                    businesses
                                </HighlightedText>{" "}
                                of all sizes to
                                <HighlightedText className="px-1">
                                    scale
                                </HighlightedText>
                            </h1>
                            <div className="flex items-center md:gap-20 justify-center gap-5 mt-10 max-container">
                                {FulifmentStats.map((stat) => (
                                    <StatCard stat={stat} key={stat.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
