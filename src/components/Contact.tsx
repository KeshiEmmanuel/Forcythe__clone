import React from "react";
import Button from "./Button";

export default function Contact() {
    return (
        <section className="section-padding font-primary contact-gradient">
            <div className="max-container relative">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-4xl text-center lg:w-[700px] lg:text-5xl lg:mx-auto">
                        <b className="text-blue-500 font-normal mr-1">
                            Ready to Scale?
                        </b>
                        Join successful brands that chose us as their
                        <b className="ml-1 text-blue-500 font-normal">
                            growth accelerator
                        </b>
                    </h2>
                    <Button className="z-10">Book a Call</Button>
                </div>
            </div>
        </section>
    );
}
