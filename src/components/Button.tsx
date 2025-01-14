import { useState } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

const Button = ({ children, className, icon }: Props) => {
    const [hover, setHover] = useState<boolean>(false);
    const handleMoveHover = () => {
        setHover((prev) => !prev);
    };
    return (
        <button
            onMouseEnter={handleMoveHover}
            onMouseLeave={() => setHover(false)}
            className={`bg-white text-black py-3 font-bold px-7 relative z-100 rounded-full ${className} transition-colors hover:bg-blue-800 hover:text-white`}
        >
            {children}
            {icon && icon}
            <div
                className={`absolute w-full h-full top-2 -left-[.35rem] rounded-full
             bg-transparent border-2 -z-10 border-dotted opacity-50 ${
                 hover && "border-blue-700"
             }`}
            />
        </button>
    );
};

export default Button;
