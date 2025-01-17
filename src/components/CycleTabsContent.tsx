import { CycleTabsProps } from "../types/CycleTabsProps";

interface Props {
    cycles: CycleTabsProps[];
    activeTab: number;
}
const CycleTabsContent = ({ cycles, activeTab }: Props) => {
    return (
        <div className="py-10">
            <h2 className="pb-5 text-2xl font-semibold lg:text-4xl lg:whitespace-nowrap">
                {cycles[activeTab].cycleSubHeading}
            </h2>
            <p className="text-gray-400 ">
                {cycles[activeTab].cycleDescription}
            </p>
        </div>
    );
};

export default CycleTabsContent;
