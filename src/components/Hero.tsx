import { BsCaretRightFill } from "react-icons/bs";
import Button from "./Button";
import HighlightedText from "./HighlightedText";
const Hero = () => {
    return (
        <section className="relative mt-24">
            <img
                src="/header-background.svg"
                className="w-screen h-screen lg:w-fit bg-top lg:h-fit absolute object-cover object-top"
                alt=""
            />
            <div className="bg-transperent-hero rounded-[3rem] bg-opacity-[.75] max-container font-primary">
                <div className="relative py-8 px-6 md:pl-10 md:py-10 z-[100] lg:pr-[8rem]">
                    <h1 className="text-6xl lg:text-screen lg:w-[1000px]">
                        We build <br className="md:hidden" />
                        <HighlightedText spacing={"2"}>
                            products
                        </HighlightedText>
                        that shape a better future
                    </h1>
                    <p className="py-6 text-gray-400 lg:text-lg lg:pr-[20rem]">
                        We’re the architects of digital excellence across
                        industries. We redefine business with cutting-edge
                        digital strategies that invokes sector-wide
                        transformation.
                    </p>
                    <Button className="mb-8 flex items-center gap-2">
                        Book a Call <BsCaretRightFill className="text-lg" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
