import Button from "./Button";
import HighlightedText from "./HighlightedText";

export default function Contact() {
    return (
        <section className="section-padding font-primary contact-gradient">
            <div className="max-container relative">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-4xl text-center lg:w-[700px] lg:text-5xl lg:mx-auto">
                        <HighlightedText className="px-2">
                            Ready to Scale?
                        </HighlightedText>
                        Join successful brands that chose us as their
                        <HighlightedText className="px-2">
                            growth accelerator
                        </HighlightedText>
                    </h2>
                    <Button className="z-10">Book a Call</Button>
                </div>
            </div>
        </section>
    );
}
