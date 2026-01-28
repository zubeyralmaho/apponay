import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-[var(--apple-text)] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--apple-blue)] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[120px] w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-[var(--apple-text)] shadow-sm transition-colors placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--apple-blue)] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Textarea.displayName = "Textarea";

const Select = React.forwardRef<
    HTMLSelectElement,
    React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => {
    return (
        <select
            className={cn(
                "flex h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-[var(--apple-text)] shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--apple-blue)] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </select>
    );
});
Select.displayName = "Select";

export { Input, Textarea, Select };
