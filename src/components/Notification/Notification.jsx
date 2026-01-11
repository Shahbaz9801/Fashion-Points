import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleShowNotification = (event) => {
      setNotification(event.detail);
      
      // Auto hide after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };

    window.addEventListener('showNotification', handleShowNotification);

    return () => {
      window.removeEventListener('showNotification', handleShowNotification);
    };
  }, []);

  const handleClose = () => {
    setNotification(null);
  };

  if (!notification) return null;

  return (
    <div className={`notification ${notification.type} show`}>
      <i className={`fas fa-${notification.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
      <div className="notification-content">
        <h4>{notification.title || (notification.type === 'success' ? 'Success!' : 'Error!')}</h4>
        <p>{notification.message}</p>
      </div>
      <button className="notification-close" onClick={handleClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default Notification;