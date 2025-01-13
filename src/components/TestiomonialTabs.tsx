import { useState } from "react";
import { TestiomonialsTabsHeading } from "../data";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";

export default function TestiomonialTabs() {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <section>
            <div className="max-container">
                <div className="overflow-x-scroll">
                    <div className="flex min-w-[750px] gap-10 md:justify-between border py-5 px-16 rounded-full border-blue-400 items-center ">
                        <TabButtons
                            testimonal={TestiomonialsTabsHeading}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>
                </div>
                <TabContent
                    testimonal={TestiomonialsTabsHeading}
                    activeTab={activeTab}
                    headingClassName="text-2xl lg:text-xl font-bold"
                    containerClassName={
                        "mt-10 bg-blue-600 py-16 px-10 lg:px-5 lg:py-5 rounded-2xl h-[400px] lg:w-[500px] flex flex-col justify-between lg:h-[300px]"
                    }
                    paragraphClassName={"py-3"}
                />
            </div>
        </section>
    );
}
