import { projectCompletedImagesLinks } from "../data";

interface Props {
    animationType: string;
    containerClasses?: string;
}
const AnimatedProjects = ({ animationType, containerClasses }: Props) => {
    return (
        <div className={`w-full inline-flex flex-nowrap ${containerClasses}`}>
            <ul
                className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${animationType}`}
            >
                {projectCompletedImagesLinks.map((link) => (
                    <li key={link}>
                        <img src={link} alt={link} />
                    </li>
                ))}
            </ul>
            <ul
                className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${animationType}`}
            >
                {projectCompletedImagesLinks.map((link) => (
                    <li key={link}>
                        <img src={link} alt={link} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimatedProjects;
