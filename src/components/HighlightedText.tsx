interface Props {
    children: React.ReactNode;
    spacing?: string;
}

export default function HighlightedText({ children, spacing }: Props) {
    return <span className={`text-blue-400 px-${spacing}`}>{children}</span>;
}
