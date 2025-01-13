interface Props {
    children: React.ReactNode;
    spacing?: number;
    className?: string;
}

export default function HighlightedText({
    children,
    spacing,
    className,
}: Props) {
    return (
        <span className={`text-blue-400 px-${spacing} ${className}`}>
            {children}
        </span>
    );
}
