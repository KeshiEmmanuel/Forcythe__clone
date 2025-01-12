import { Stats } from "../types/FulfimentStats";
type Props = {
    stat: Stats;
};
const StatCard = ({ stat }: Props) => {
    return (
        <div className="font-primary">
            <h1 className="text-blue-400 text-2xl md:text-5xl">
                {stat.statNumber}+
            </h1>
            <p className="whitespace-nowrap md:text-lg">{stat.statTitle}</p>
        </div>
    );
};

export default StatCard;
