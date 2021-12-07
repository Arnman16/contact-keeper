import React, { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const { alerts } = useContext(alertContext);
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle">
          {' '}
          <span className="text-thin">{alert.msg}</span>
        </i>
      </div>
    ))
  );
};

export default Alerts;
