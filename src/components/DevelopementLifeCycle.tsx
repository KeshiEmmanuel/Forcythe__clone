import CycleTabs from "./CycleTabs";
import HighlightedText from "./HighlightedText";

const DevelopementLifeCycle = () => {
    return (
        <section className="section-padding font-primary max-container">
            <h1 className="text-4xl lg:w-[700px] text-center md:text-left">
                From <HighlightedText spacing="1">Spark</HighlightedText> to
                <HighlightedText spacing="1">Spotlight:</HighlightedText> we
                take you every step of the way to success.
            </h1>
            <CycleTabs />
        </section>
    );
};

export default DevelopementLifeCycle;
