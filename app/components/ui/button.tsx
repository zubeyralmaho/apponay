import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--apple-blue)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--apple-blue)] text-white hover:bg-[#0077ed] shadow-md hover:shadow-lg active:scale-[0.98]",
                secondary:
                    "bg-[var(--apple-dark)] text-white hover:bg-[#2d2d2f] shadow-md hover:shadow-lg active:scale-[0.98]",
                outline:
                    "border-2 border-[var(--apple-blue)] text-[var(--apple-blue)] hover:bg-[var(--apple-blue)] hover:text-white",
                ghost:
                    "text-[var(--apple-text)] hover:bg-zinc-100",
                link: "text-[var(--apple-blue)] underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
