import { CycleTabsProps } from "../types/CycleTabsProps";

interface Props {
    cycles: CycleTabsProps[];
    activeTab: number;
}
const CycleTabImage = ({ cycles, activeTab }: Props) => {
    return (
        <>
            <img
                className="mt-10 lg:mt-0 w-fit lg:w-[400px] lg:basis-[400px]"
                src={cycles[activeTab].cycleImage}
                alt={cycles[activeTab].cycleTitle}
            />
        </>
    );
};

export default CycleTabImage;
