import type { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

const Heading = ({ children, level = 2, className="" }: HeadingProps) => {
    const Tag = `h${level}` as const;

    return (
        <Tag className={className}>
            {children}
        </Tag>
    );
}

export default Heading;