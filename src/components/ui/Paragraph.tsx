import type { ReactNode } from "react";

type ParagraphProps = {
    children: ReactNode;
    className?: string;
}

const Paragraph = ({children, className = ""}: ParagraphProps) => {
    return  (
        <p className={className}>{children}</p>
    );
}

export default Paragraph;