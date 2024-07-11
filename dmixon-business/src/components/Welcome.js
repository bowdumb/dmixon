import React from 'react';
import '../styles/Welcome.css';

function Welcome() {
    return (
        <div className="welcome-container">
            <div className="welcome-image">
                <img src="assets/placeholder.jpeg" alt="Danielle's headshot" />
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
    );
}

export default Welcome;