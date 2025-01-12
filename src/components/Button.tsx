interface Props {
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}
const Button = ({ children, className, icon }: Props) => {
    return (
        <button
            className={`bg-white text-black py-3 font-bold px-7 z-100 rounded-full relative ${className}`}
        >
            {children}
            {icon && icon}
            <div
                className="absolute w-full h-full top-2 -left-[.35rem] rounded-full
             bg-transparent border-2 -z-10 border-dotted opacity-50"
            />
        </button>
    );
};

export default Button;
