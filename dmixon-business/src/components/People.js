import React from 'react';
import '../styles/People.css';
import BodyContent from './BodyContent';


function People () {
    return (
        <BodyContent>
            <div className="danielle-bio-container">
                <div className="danielle-bio-headshot">
                    <img src="assets/placeholder.jpeg" alt="Danielle's headshot" className="people-headshots" />
                </div>
            </div>

        </BodyContent>
    );
};

export default People;