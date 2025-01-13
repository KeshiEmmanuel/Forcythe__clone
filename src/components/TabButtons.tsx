import { TestimonialTabProps } from "../types/TestimonialTypes";

interface Props {
    testimonal: TestimonialTabProps[];
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    activeTab: number;
}
const TabButtons = ({ testimonal, setActiveTab, activeTab }: Props) => {
    return (
        <>
            {testimonal.map((test, i) => (
                <button
                    key={test.id}
                    onClick={() => setActiveTab(i)}
                    className={` relative ${
                        activeTab === i && "opacity-50"
                    } border-none outline-none`}
                >
                    <img
                        className="w-32"
                        src={test.tabImage}
                        alt={test.tabCompany}
                    />
                </button>
            ))}
        </>
    );
};

export default TabButtons;
