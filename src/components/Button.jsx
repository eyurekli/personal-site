import './../styles/Button.css';

export default function Button({
    variant = 'primary',
    size = 'md',
    onClick,
    children,
    disabled = false,
    type = 'button',
    className = '',
    ariaLabel,
    href,
    target,
    rel
}) {
    const baseClasses = `btn btn-${variant} btn-${size} ${className}`.trim();
    
    // If href is provided, render as link-styled button
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={baseClasses}
                aria-label={ariaLabel}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }
    
    // Otherwise render as button
    return (
        <button
            type={type}
            className={baseClasses}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

