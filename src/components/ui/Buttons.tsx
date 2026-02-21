import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function PrimaryButton({ children, className, icon, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base overflow-hidden transition-all shadow-md hover:shadow-lg hover:bg-blue-700",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-2 relative z-10">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
    </motion.button>
  );
}

export function SecondaryButton({ children, className, icon, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold text-base hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        {icon}
      </span>
    </motion.button>
  );
}
