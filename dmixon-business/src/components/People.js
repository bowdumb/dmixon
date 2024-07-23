import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/People.css';
import BodyContent from './BodyContent';


function People() {
    return (
        <BodyContent>
            <Link to="/DanielleBio" className="link-container">
                <div className="danielle-bio-container">
                    <div className="danielle-bio-headshot">
                        <img src="assets/placeholder.jpeg" alt="Danielle's headshot" className="people-headshots" />
                    </div>
                    <div className="danielle-people-title">
                        <h1>Danielle Mixon, LCSW</h1>
                    </div>
                </div>
            </Link>
        </BodyContent>
    );
};

export default People;