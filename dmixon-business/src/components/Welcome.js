import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';
import BodyContent from './BodyContent';

function Welcome() {
    return (
        <BodyContent>
            <div className="welcome-container">
                <div className="welcome-header">
                    Trauma-centered therapy for individuals, consulting for businesses, and  
                    clinical supervision for therapists
                    <div className="contact-button-welcome">
                        <Link to="/contact" className="book-session-button">Book a session</Link>
                    </div>
                </div>
                <div className="letter-container">
                    <p>
                        Haven provides resources for adults who are navigating life after trauma and leaders who are creating more
                        trauma-informed environments. Every aspect of the services we provide and the way we provide them are designed
                        to be antidotes to the negative effects of traumatic experiences.
                    </p>
                    <p>
                        We offer:
                    </p>
                    <ul>
                        <li>Individual teletherapy for adults in NY who have experienced trauma</li>
                        <li>Online clinical supervision for social workers who specialize in trauma work</li>
                        <li>Consulting and educational services for organizations who are building trauma-informed systems </li>
                    </ul>
                    <p>
                        We prioritize integrity and inclusivity in the Haven community. A cornerstone of our work in the trauma field
                        is recognizing that oppressive systems and exploitation of power are pervasive in our society. We aim to operate
                        in a way that counters powerlessness and dehumanization, radically welcomes people from marginalized communities,
                        and provides appropriate and nonjudgmental support to all.
                    </p>
                </div>
            </div>
        </BodyContent>
    );
}

export default Welcome;