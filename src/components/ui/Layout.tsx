import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'light' | 'dark' | 'gradient';
}

export function SectionWrapper({ 
  children, 
  className, 
  id, 
  background = 'default',
  ...props 
}: SectionWrapperProps) {
  const backgrounds = {
    default: "bg-white",
    light: "bg-slate-50 border-y border-slate-200",
    dark: "bg-slate-900 text-white",
    gradient: "bg-gradient-to-b from-white to-blue-50"
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-24 relative overflow-hidden",
        backgrounds[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div 
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
