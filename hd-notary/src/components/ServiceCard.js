import React from 'react';
import { 
  FaFileContract,  
  FaFileSignature, 
  FaCarSide, 
  FaHome, 
} from 'react-icons/fa';

const getIcon = (type) => {
  switch (type) {
    case 'real-estate':
      return <FaFileContract className="service-icon" />;
    case 'poa':
      return <FaHome className="service-icon" />;
    case 'affidavit':
      return <FaFileSignature className="service-icon" />;
    case 'mobile':
      return <FaCarSide className="service-icon" />;
    default:
      return <FaFileSignature className="service-icon" />;
  }
};

const ServiceCard = ({ type, title, description }) => {
  return (
    <div className="service">
      <div className="service-icon-container">
        {getIcon(type)}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;