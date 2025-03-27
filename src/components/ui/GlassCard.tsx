
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        'backdrop-blur-md bg-black/20 border border-white/10 shadow-glass rounded-2xl',
        hover && 'transition-all duration-300 hover:bg-black/25 hover:border-white/20 hover:shadow-glass-hover hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
