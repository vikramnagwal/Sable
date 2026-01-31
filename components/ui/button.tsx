import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    label: string;
    labelWrapperClassName?: string;
    icon?: React.ReactNode | string;
    iconPosition?: 'left' | 'right';
    iconWrapperClassName?: string;
    shortcut?: string;
    shortcutClassName?: string;
    ref?: React.Ref<HTMLButtonElement>;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
}

const buttonVariants = cva(
    'relative inline-flex items-center justify-center cursor-pointer capitalize rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2',
    {
        variants: {
            variant: {
                primary: 'outline bg-primary text-primary-foreground hover:bg-primary/90 ',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
                link: 'bg-transparent underline-offset-4 hover:underline text-blue-600',
            }, 
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-3 rounded-md',
                lg: 'h-11 px-8 rounded-md',
            }
        }, 
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        }
    }
)

export function Button({
    variant = 'primary',
    size,
    ref,
    label,
    labelWrapperClassName,
    shortcut,
    shortcutClassName,
    loading,
    disabled,
    icon,
    iconPosition = 'left',
    iconWrapperClassName,
    className,
    ...props
}: ButtonProps) {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...(loading && { "aria-busy": true })}
        {...props}
      >
        {
            icon && iconPosition === "left" && <span className={cn("mr-2 flex items-center", iconWrapperClassName)}>{icon}</span>
        }
        {label && <span className={labelWrapperClassName}>{label}</span>}
        {shortcut && (
          <kbd
            className={cn(
              "hidden ml-2 rounded-sm border-none bg-neutral-600 px-2 py-0.5 text-xs font-light text-neutral-200 md:inline-block",
              {
                "bg-neutral-100": variant?.endsWith("outline"),
                "bg-neutral-200 text-neutral-400": disabled,
              },
              shortcutClassName,
            )}
          >
            {shortcut}
          </kbd>
        )}
      </button>
    );
}

Button.displayName = "Button";