import type { HTMLAttributes } from 'react';

type SidebarCardProps = {
  text: string;
  number: number;
  variant?: 'total' | 'active' | 'pending' | 'completed';
  onClick?: () => void;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const SidebarCard = ({
  text,
  number,
  variant = 'total',
  className = '',
  ...props
}: SidebarCardProps) => {
  
  return (
    <div 
      className={`card ${className}`} 
      style={{
        backgroundColor: `var(--color-bg-${variant})`,
        borderColor: `var(--color-border-${variant})`,
      }}
      {...props}
    >
      <div
        className={`card-text`}
        style={{ color: `var(--color-text-${variant})`}}
      >
        {text}
      </div>
      <div 
        className={`card-number`}
        style={{ color: `var(--color-title-${variant})` }}
      >
        {number}
      </div>
    </div>
  );
};

export default SidebarCard;