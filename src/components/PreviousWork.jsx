import { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import './../styles/PreviousWork.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PreviousWork() {
    const workRef = useScrollAnimation({ animationClass: 'fade-in' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const detailsRef = useRef(null);
    const organizationListRef = useRef(null);

    const workExperiences = [
        {
            organization: "Trench Group",
            title: "AI/ML Intern",
            duration: "MAY 2025 - DEC 2025",
            bullets: [
                "Collaborated in a cross-functional team using Agile practices to deliver AI & automation solutions.",
                "Accelerated SAP tasks by prototyping agentic AI workflows powered with Retrieval Augmented Generation.",
                "Deployed solutions on Microsoft Azure, gaining exposure to cloud deployment workflows and integration.",
                "Presented AI-driven solutions to diverse stakeholders including the executive leadership at Trench Canada (CEO, Head of Finance), and the Global CEO, ensuring technical outcomes were aligned with business priorities."
            ]
        },
        {
            organization: "Dalhousie FCS Recruitment Ambassador",
            title: "Student Ambassador",
            duration: "SEP 2025 - PRESENT",
            bullets: [
                "Representing the university and helping prospective students learn about campus life, academic programs, and student resources",
                "Leading campus tours and participating in recruitment events",
                "Sharing personal experiences and insights about the Computer Science program",
                "Assisting with orientation events and student engagement activities",
                "Building relationships with prospective students and their families"
            ]
        },
        {
            organization: "Dalhousie Faculty of Computer Science",
            title: "Teaching Assistant",
            duration: "SEP 2024 - APRIL 2025",
            bullets: [
                "Assisting professors in delivering course content and facilitating student learning",
                "Grading assignments, exams, and providing constructive feedback to students",
                "Conducting office hours and tutoring sessions to support student success",
                "Preparing and presenting supplementary materials and examples",
                "Collaborating with teaching team to improve course materials and delivery"
            ]
        }
    ];

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            const listContainer = organizationListRef.current;
            if (!listContainer || !listContainer.contains(document.activeElement)) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (selectedIndex + 1) % workExperiences.length;
                setSelectedIndex(nextIndex);
                // Focus the next button
                const nextButton = listContainer.querySelector(`#organization-tab-${nextIndex}`);
                if (nextButton) nextButton.focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (selectedIndex - 1 + workExperiences.length) % workExperiences.length;
                setSelectedIndex(prevIndex);
                // Focus the previous button
                const prevButton = listContainer.querySelector(`#organization-tab-${prevIndex}`);
                if (prevButton) prevButton.focus();
            } else if (e.key === 'Home') {
                e.preventDefault();
                setSelectedIndex(0);
                const firstButton = listContainer.querySelector('#organization-tab-0');
                if (firstButton) firstButton.focus();
            } else if (e.key === 'End') {
                e.preventDefault();
                const lastIndex = workExperiences.length - 1;
                setSelectedIndex(lastIndex);
                const lastButton = listContainer.querySelector(`#organization-tab-${lastIndex}`);
                if (lastButton) lastButton.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, workExperiences.length]);

    const handleOrganizationClick = (index) => {
        setSelectedIndex(index);
    };

    const selectedWork = workExperiences[selectedIndex];

    return (
        <Element name="previous-work" id="previous-work">
            <section className="previous-work-section" ref={workRef} aria-label="Previous Work section">
                <h2 className="section-heading">Previous Work</h2>
                
                <div className="work-content">
                    <nav 
                        className="organizations-list" 
                        role="tablist" 
                        aria-label="Work experience organizations"
                        ref={organizationListRef}
                    >
                        {workExperiences.map((work, index) => (
                            <button
                                key={index}
                                className={`organization-item ${index === selectedIndex ? 'selected' : ''}`}
                                onClick={() => handleOrganizationClick(index)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleOrganizationClick(index);
                                    }
                                }}
                                role="tab"
                                aria-selected={index === selectedIndex}
                                aria-controls={`work-details-${index}`}
                                id={`organization-tab-${index}`}
                                tabIndex={index === selectedIndex ? 0 : -1}
                            >
                                {work.organization}
                            </button>
                        ))}
                    </nav>

                    <div 
                        className="work-details"
                        role="tabpanel"
                        id={`work-details-${selectedIndex}`}
                        aria-labelledby={`organization-tab-${selectedIndex}`}
                        ref={detailsRef}
                    >
                        <div className="work-details-content">
                            <h3 className="work-title">{selectedWork.title}</h3>
                            <p className="work-duration">{selectedWork.duration}</p>
                            <ul className="work-bullets">
                                {selectedWork.bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="work-announcement" aria-live="polite" aria-atomic="true">
                    <span className="sr-only">Now showing: </span>
                    {selectedWork.title} at {selectedWork.organization}
                </div>
            </section>
        </Element>
    );
}

