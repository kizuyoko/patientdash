import type { HTMLAttributes } from 'react';

type SidebarCardProps = {
  title: string;
  number: number;
  variant?: 'total' | 'active' | 'pending' | 'completed';
  onClick?: () => void;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const variantStyles: Record<
  NonNullable<SidebarCardProps['variant']>,
  { card: string; title: string; number: string }
> = {
  total: {
    card: 'bg-blue-50 border-blue-200',
    title: 'text-blue-600',
    number: 'text-blue-700',
  },
  active: {
    card: 'bg-green-50 border-green-300',
    title: 'text-green-600',
    number: 'text-green-700',
  },
  pending: {
    card: 'bg-orange-50 border-orange-200',
    title: 'text-orange-600',
    number: 'text-orange-700',
  },
  completed: {
    card: 'bg-purple-50 border-purple-200',
    title: 'text-purple-600',
    number: 'text-purple-700',
  },
};

const SidebarCard = ({
  title,
  number,
  variant = 'total',
  className = '',
  ...props
}: SidebarCardProps) => {
  const styles = variantStyles[variant];

  return (
    <div className={`card ${styles.card} ${className}`} {...props}>
      <div className={`card-title ${styles.title}`}>{title}</div>
      <div className={`card-number ${styles.number}`}>{number}</div>
    </div>
  );
};

export default SidebarCard;