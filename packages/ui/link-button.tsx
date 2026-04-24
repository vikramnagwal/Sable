import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	label: string;
	link: string;
	icon?: React.ReactNode | string;
	iconPosition?: "left" | "right";
	iconWrapperClassName?: string;
	className?: string;
}

const linkButtonVariants = cva(
	"cursor-pointer inline-flex items-center justify-center font-[16px] capitalize",
	{
		variants: {
			variant: {
				primary:
					"px-[80px] py-2 rounded-none border border-foreground/80 bg-white/80 text-black hover:text-foreground/80 hover:bg-black duration-300",
				secondary:
					"bg-transparent text-secondary-foreground hover:bg-secondary/80",
				ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
				link: "bg-transparent underline-offset-4 hover:underline text-blue-600",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

export const LinkButton: React.FC<LinkButtonProps> = ({
	label,
	link,
	icon,
	iconPosition,
	className,
	iconWrapperClassName,
}: LinkButtonProps) => {
	return (
		<Link href={link} className={cn(linkButtonVariants(), className)}>
			{icon && iconPosition === "left" && (
				<span className={iconWrapperClassName}>{icon}</span>
			)}
			{label}
			{icon && iconPosition === "right" && (
				<span className={iconWrapperClassName}>{icon}</span>
			)}
		</Link>
	);
};
