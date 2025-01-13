import { CycleTabsProps } from "../types/CycleTabsProps";

interface Props {
    cycles: CycleTabsProps[];
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    activeTab: number;
}

const CycleTabsButton = ({ cycles, setActiveTab, activeTab }: Props) => {
    return (
        <>
            {cycles.map((cycle, i) => (
                <button
                    key={cycle.id}
                    onClick={() => setActiveTab(i)}
                    className={`border-none outline-none ${
                        activeTab === i && "bg-blue-300 rounded-full"
                    } py-2 px-5 `}
                >
                    {cycle.cycleTitle}
                </button>
            ))}
        </>
    );
};

export default CycleTabsButton;