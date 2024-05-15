import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCar, faPuzzlePiece,  } from '@fortawesome/free-solid-svg-icons';

const getIconByTitle = (title) => {
    switch (title.toLowerCase()) {
        case 'quality support':
            return faCheckCircle;
        case 'all car makes':
            return faCar;
        case 'variety services':
            return faPuzzlePiece;
        default:
            return faCheckCircle;
    }
};


const FeatureCard = ({ title, description }) => {
    const icon = getIconByTitle(title);

    return (
        <div className="feature-card text-left d-flex flex-column justify-content-center align-items-center">
            <div className="icon mb-3" style={{ color: '#18bd9d' }}>
                <FontAwesomeIcon icon={icon} size="3x" />
            </div>
            <div className="content">
                <h4 className="mb-2 text-center">{title}</h4>
                <p className='text-left text-center'>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;