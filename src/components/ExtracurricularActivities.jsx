import { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import './../styles/ExtracurricularActivities.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ExtracurricularActivities() {
    const activitiesRef = useScrollAnimation({ animationClass: 'fade-in' });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const autoRotateRef = useRef(null);
    const inactivityTimerRef = useRef(null);
    const isUserInteractingRef = useRef(false);

    // Handle window resize for responsive breakpoints
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const activities = [
        {
            title: "Student Ambassador",
            organization: "Dalhousie University",
            role: "Student Ambassador",
            description: "Representing the university and helping prospective students learn about campus life, academic programs, and student resources. Leading campus tours and participating in recruitment events.",
            dates: "2023 - Present",
            image: null, // Will be added when available
            icon: "👋", // Placeholder icon
            link: null
        },
        {
            title: "Dalhousie MUN",
            organization: "Dalhousie Model United Nations",
            role: "Member",
            description: "Participating in Model United Nations conferences, debating global issues, and developing diplomatic and public speaking skills. Collaborating with delegates from various universities.",
            dates: "2023 - Present",
            image: null, // Will be added when available
            icon: "🌍", // Placeholder icon
            link: null
        },
        {
            title: "Hackathon Participant",
            organization: "Various Hackathons",
            role: "Participant & Winner",
            description: "Participating in multiple hackathons, building innovative solutions under time constraints and collaborating with diverse teams. Secured 1st place at ShiftKey GenAI Mental Well-being Hackathon and 2nd place at NASA Space Apps Hackathon.",
            dates: "2023 - Present",
            image: null, // Will be added when available
            icon: "💻", // Placeholder icon
            link: null
        },
        {
            title: "Volunteer",
            organization: "Campus Community",
            role: "Volunteer",
            description: "Volunteering on campus and across Halifax to support various community initiatives, such as Turkish Society of NS, Dal International Students Centre, and more.",
            dates: "2023 - Present",
            image: null, // Will be added when available
            icon: "🤝", // Placeholder icon
            link: null
        }
    ];

    const isDesktop = windowWidth >= 1024;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    const isMobile = windowWidth < 768;
    const useCarousel = isTablet || isMobile;

    // Auto-rotation logic
    useEffect(() => {
        if (!useCarousel || isPaused) return;

        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Check if tab is visible
        const handleVisibilityChange = () => {
            if (document.hidden) {
                clearInterval(autoRotateRef.current);
            } else if (!isPaused && !isUserInteractingRef.current) {
                startAutoRotation();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        const startAutoRotation = () => {
            autoRotateRef.current = setInterval(() => {
                if (!isUserInteractingRef.current) {
                    setCurrentIndex((prev) => (prev + 1) % activities.length);
                }
            }, 6000); // 6 seconds
        };

        startAutoRotation();

        return () => {
            clearInterval(autoRotateRef.current);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [useCarousel, isPaused, activities.length]);

    // Handle inactivity resume
    useEffect(() => {
        if (isUserInteractingRef.current) {
            clearTimeout(inactivityTimerRef.current);
            inactivityTimerRef.current = setTimeout(() => {
                isUserInteractingRef.current = false;
            }, 3000);
        }
    }, [currentIndex]);

    const goToSlide = (index) => {
        isUserInteractingRef.current = true;
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        isUserInteractingRef.current = true;
        setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
    };

    const goToNext = () => {
        isUserInteractingRef.current = true;
        setCurrentIndex((prev) => (prev + 1) % activities.length);
    };

    const togglePause = () => {
        setIsPaused((prev) => !prev);
        isUserInteractingRef.current = true;
    };

    // Touch handlers for swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    // Refs for carousel
    const carouselRef = useRef(null);
    
    // Scroll to slide on mobile
    useEffect(() => {
        if (!useCarousel || !isMobile) return;
        
        const carousel = carouselRef.current;
        if (!carousel) return;
        
        const slideWidth = carousel.offsetWidth;
        carousel.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });
    }, [currentIndex, useCarousel, isMobile]);

    // Handle scroll events on mobile to update currentIndex
    useEffect(() => {
        if (!useCarousel || !isMobile) return;
        
        const carousel = carouselRef.current;
        if (!carousel) return;
        
        const handleScroll = () => {
            const slideWidth = carousel.offsetWidth;
            const newIndex = Math.round(carousel.scrollLeft / slideWidth);
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < activities.length) {
                isUserInteractingRef.current = true;
                setCurrentIndex(newIndex);
            }
        };
        
        carousel.addEventListener('scroll', handleScroll);
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, [useCarousel, isMobile, currentIndex, activities.length]);
    
    // Keyboard navigation for carousel (tablet/desktop only)
    useEffect(() => {
        if (!useCarousel || isMobile) return;
        
        const handleKeyDown = (e) => {
            const carousel = carouselRef.current;
            if (!carousel) return;
            
            const isCarouselFocused = carousel === document.activeElement || carousel.contains(document.activeElement);
            if (!isCarouselFocused) return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
                isUserInteractingRef.current = true;
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                setCurrentIndex((prev) => (prev + 1) % activities.length);
                isUserInteractingRef.current = true;
            } else if (e.key === 'Home') {
                e.preventDefault();
                setCurrentIndex(0);
                isUserInteractingRef.current = true;
            } else if (e.key === 'End') {
                e.preventDefault();
                setCurrentIndex(activities.length - 1);
                isUserInteractingRef.current = true;
            }
        };

        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('keydown', handleKeyDown);
        }
        
        return () => {
            if (carousel) {
                carousel.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [useCarousel, isMobile, activities.length]);

    const ActivityCard = ({ activity, index }) => {
        const hasImage = activity.image !== null && activity.image !== undefined;
        
        return (
            <div className="activity-card">
                <div className="activity-image-container">
                    {hasImage ? (
                        <>
                            <img 
                                src={activity.image} 
                                alt={`${activity.title} - ${activity.organization}`}
                                loading="lazy"
                                className="activity-hero-image"
                                width="800"
                                height="450"
                            />
                            <div className="activity-icon-overlay">
                                <span className="activity-icon" aria-hidden="true">{activity.icon}</span>
                            </div>
                        </>
                    ) : (
                        <div className="activity-icon-fallback">
                            <span className="activity-icon-large" aria-hidden="true">{activity.icon}</span>
                        </div>
                    )}
                </div>
                <div className="activity-content">
                    <h3 className="activity-title">{activity.title}</h3>
                    <p className="activity-organization">{activity.organization}</p>
                    {activity.role && <p className="activity-role">{activity.role}</p>}
                    <p className="activity-dates">{activity.dates}</p>
                    <p className="activity-description">{activity.description}</p>
                    {activity.link && (
                        <a 
                            href={activity.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="activity-link"
                            aria-label={`Learn more about ${activity.title}`}
                        >
                            Learn More
                        </a>
                    )}
                </div>
            </div>
        );
    };

    return (
        <Element name="activities" id="activities">
            <section className="extracurricular-section" ref={activitiesRef} aria-label="Extracurricular Activities section">
                <h2 className="section-heading">Extracurricular Activities</h2>
                <p className="section-intro">
                    Beyond academics, I'm actively involved in various activities that help me grow as a developer and contribute to the community.
                </p>

                {useCarousel ? (
                    <div className="carousel-wrapper">
                        <div 
                            ref={carouselRef}
                            className="activities-carousel"
                            role="region"
                            aria-label="Extracurricular activities carousel"
                            tabIndex={isMobile ? -1 : 0}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div 
                                className="carousel-container"
                                style={isMobile ? {} : {
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    transition: 'transform 0.5s ease-in-out'
                                }}
                            >
                                {activities.map((activity, index) => (
                                    <div key={index} className="carousel-slide">
                                        <ActivityCard activity={activity} index={index} />
                                    </div>
                                ))}
                            </div>

                            {!isMobile && (
                                <div className="carousel-controls">
                                    <button
                                        className="carousel-arrow carousel-arrow-left"
                                        onClick={goToPrevious}
                                        aria-label="Previous activity"
                                    >
                                        <span aria-hidden="true">‹</span>
                                        <span className="sr-only">Previous activity</span>
                                    </button>
                                    <button
                                        className="carousel-arrow carousel-arrow-right"
                                        onClick={goToNext}
                                        aria-label="Next activity"
                                    >
                                        <span aria-hidden="true">›</span>
                                        <span className="sr-only">Next activity</span>
                                    </button>
                                </div>
                            )}

                            <div className="carousel-announcement" aria-live="polite" aria-atomic="true" aria-role="status">
                                <span className="sr-only">Now showing: </span>
                                Activity {currentIndex + 1} of {activities.length}: {activities[currentIndex].title}
                            </div>
                        </div>

                        <div className="carousel-dots" role="tablist" aria-label="Activity slides">
                            {activities.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to activity ${index + 1}: ${activities[index].title}`}
                                    aria-selected={index === currentIndex}
                                    role="tab"
                                    tabIndex={index === currentIndex ? 0 : -1}
                                />
                            ))}
                        </div>

                        <button
                            className="carousel-pause-toggle"
                            onClick={togglePause}
                            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
                            aria-pressed={!isPaused}
                        >
                            <span aria-hidden="true">{isPaused ? '▶' : '⏸'}</span>
                            <span className="sr-only">{isPaused ? 'Resume' : 'Pause'} slideshow</span>
                        </button>
                    </div>
                ) : (
                    <div className="activities-grid">
                        {activities.map((activity, index) => (
                            <ActivityCard key={index} activity={activity} index={index} />
                        ))}
                    </div>
                )}
            </section>
        </Element>
    );
}

