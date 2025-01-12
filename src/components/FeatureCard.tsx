import { FeatureCardProps } from "../types/FeatureCardTypes";

interface Props {
    feature: FeatureCardProps;
}

function FeatureCard({ feature }: Props) {
    return (
        <div className="font-primary py-6 px-7 rounded-xl bg-primary">
            <div className="bg-blue-300 w-fit text-3xl p-2 rounded-lg">
                {feature.icon}
            </div>
            <h2 className="text-2xl py-3 font-medium">{feature.FeatureName}</h2>
            <div className="my-5 text-lg text-gray-400">
                {feature.FeatureDescription}
            </div>
        </div>
    );
}

export default FeatureCard;
