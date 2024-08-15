import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import BodyContent from './BodyContent';

function Landing() {
    return (
        <BodyContent>
            <div className="landing-container">
                <div className="top-row">
                    <div className="landing-header">
                        Trauma therapy for individuals, consulting for businesses, and
                        clinical supervision for therapists
                        <div className="contact-button-landing">
                            <Link to="/contact" className="book-consult-button">BOOK A CONSULTATION</Link>
                        </div>
                    </div>
                    <div className="welcome-statement-container">
                        <div className="welcome-statement">
                            Welcome to Haven Therapy & Consulting, where we use trauma-informed methodologies within the realms of individual consulting,
                            clinical supervision, and consulting for businesses and communities. Reach out to book a consultation today, or read on to get
                            to know us better.
                        </div>
                    </div>
                </div>
                <div className="statement right chain">
                    <div className="statement-1">
                        Haven provides resources for adults who are navigating life after trauma and leaders who are creating more
                        trauma-informed environments. Every aspect of the services we provide and the way we provide them are designed
                        to be antidotes to the negative effects of traumatic experiences.
                    </div>
                </div>
                <div className="statement left chain">
                    <p>We offer:
                        <ul>
                            <li>Individual teletherapy for adults in NY who have experienced trauma</li>
                            <li>Online clinical supervision for social workers who specialize in trauma work</li>
                            <li>Consulting and educational services for organizations who are building trauma-informed systems</li>
                        </ul>
                    </p>
                </div>
                <div className="statement right chain">
                    <div className="statement-3">
                        We prioritize integrity and inclusivity in the Haven community. A cornerstone of our work in the trauma field
                        is recognizing that oppressive systems and exploitation of power are pervasive in our society. We aim to operate
                        in a way that counters powerlessness and dehumanization, radically welcomes people from marginalized communities,
                        and provides appropriate and nonjudgmental support to all.
                    </div>
                </div>
            </div>
        </BodyContent>
    );
}

export default Landing;