import { useState } from "react";
import { CycleContents } from "../data";
import Button from "./Button";
import CycleTabsButton from "./CycleTabsButton";
import CycleTabsContent from "./CycleTabsContent";
import { BsCaretRightFill } from "react-icons/bs";
import CycleTabImage from "./CycleTabImage";

const CycleTabs = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-col pt-10 lg:basis-[600px]">
                <div className="py-3 border-2 border-blue-200 px-10 lg:py-4 rounded-full flex justify-between">
                    <CycleTabsButton
                        cycles={CycleContents}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
                <CycleTabsContent
                    cycles={CycleContents}
                    activeTab={activeTab}
                />
                <Button className="self-start flex items-center gap-1">
                    Book a Call <BsCaretRightFill className="text-lg" />
                </Button>
            </div>
            <CycleTabImage cycles={CycleContents} activeTab={activeTab} />
        </div>
    );
};

export default CycleTabs;
