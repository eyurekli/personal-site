import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {string} options.animationClass - CSS class to add when element is visible
 * @param {string} options.rootMargin - Root margin for Intersection Observer (default: '0px 0px -50px 0px')
 * @param {number} options.threshold - Threshold for Intersection Observer (default: 0.1)
 * @returns {React.RefObject} - Ref to attach to the element
 */
export const useScrollAnimation = ({ 
    animationClass = 'fade-in', 
    rootMargin = '0px 0px -50px 0px',
    threshold = 0.1 
} = {}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            // Still add the class but animations will be minimal via CSS
            element.classList.add(animationClass);
            element.classList.add('animated');
            return;
        }

        // Check if element is already in viewport on mount
        const checkInitialVisibility = () => {
            const rect = element.getBoundingClientRect();
            // Check if element is in viewport (with some margin for "above viewport" elements)
            const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
            if (isVisible) {
                // Element is already visible or just above viewport, make it visible immediately
                element.classList.add(animationClass);
                element.classList.add('animated');
                // Ensure it's visible
                element.style.opacity = '1';
                element.style.transform = 'none';
            } else {
                // Element is below viewport, hide it for animation
                element.style.opacity = '0';
                if (animationClass === 'slide-up') {
                    element.style.transform = 'translateY(30px)';
                } else {
                    element.style.transform = 'translateY(20px)';
                }
            }
        };

        // Check immediately with a small delay to ensure DOM is ready
        setTimeout(checkInitialVisibility, 100);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Remove inline styles and add animation classes
                        entry.target.style.opacity = '';
                        entry.target.style.transform = '';
                        entry.target.classList.add(animationClass);
                        entry.target.classList.add('animated');
                        // Optionally disconnect after animation triggers once
                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin,
                threshold,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [animationClass, rootMargin, threshold]);

    return elementRef;
};

