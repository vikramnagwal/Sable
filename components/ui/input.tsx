import { cva, VariantProps } from "class-variance-authority";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    isPassword?: boolean;
    icon?: React.ReactNode | string;
    placeholder?: string;
    label?: string;
    className?: string;
}

const inputVariants = cva(
    'block w-full rounded-md bg-white/20 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: 'border-blue-500 focus:border-blue-500 focus:ring-blue-500',
                secondary: 'border-gray-300 focus:border-gray-300 focus:ring-gray-300',
                ghost: 'border-transparent focus:border-transparent focus:ring-transparent',
            },
            size_type: {
                default: 'text-sm',
                sm: 'text-xs',
                lg: 'text-base',
            },
        },
    }
)


export default function Input({
    variant,
    size_type,
    icon,
    label,
    isPassword,
    className,
    ...props

}: InputProps) {
    return (
        <div className="w-full">
            {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <input
                type={isPassword ? "password" : "text"}
                className={inputVariants({ variant, size_type, className })}
                {...props}
                {...icon && <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">{icon}</span>}
            />
        </div>
    )
}