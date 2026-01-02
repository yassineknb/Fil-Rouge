import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    type = 'button',
    variant = 'primary', // 'primary' | 'secondary' | 'link'
    isLoading = false,
    disabled = false,
    className,
    onClick,
    ...props
}) => {
    const baseStyles = "w-full py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center focus:outline-none";

    const variants = {
        primary: "bg-primary text-white hover:bg-emerald-600 shadow-sm", // Assuming 'primary' in config is #10B981
        secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        link: "bg-transparent text-primary hover:text-emerald-700 underline-offset-4 hover:underline p-0 w-auto h-auto",
    };

    return (
        <button
            type={type}
            className={twMerge(clsx(baseStyles, variants[variant]), className)}
            disabled={disabled || isLoading}
            onClick={onClick}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Chargement...
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
