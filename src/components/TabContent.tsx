import { TestimonialTabProps } from "../types/TestimonialTypes";

interface Props<T> {
    testimonal: T[];
}
interface allProps extends Props<TestimonialTabProps> {
    activeTab: number;
    containerClassName: string;
    paragraphClassName: string;
    headingClassName: string;
}

export default function TabContent({
    testimonal,

    containerClassName,
    paragraphClassName,
    headingClassName,
    activeTab,
}: allProps) {
    return (
        <>
            <div className={`${containerClassName}`}>
                <h1 className={`${headingClassName}`}>
                    {testimonal[activeTab].tabCompany}
                </h1>
                <p className={`${paragraphClassName}`}>
                    {testimonal[activeTab].tabDescription}
                </p>
                <p className={`${headingClassName}`}>
                    {testimonal[activeTab].tabTitle}
                </p>
            </div>
        </>
    );
}
