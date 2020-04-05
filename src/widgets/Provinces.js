import React from 'react';

const Provinces = ({ province, confirmed, deaths, recovered }) => {
  return (
    <div className="flex-container">
      <div>
        <h1>{province} </h1>
        <h2>
          {' '}
          <span role="img" aria-label="confirmed">
            ✅
          </span>{' '}
          {confirmed}
        </h2>
        <h2>
          {' '}
          <span role="img" aria-label="deaths">
            💀
          </span>{' '}
          {deaths}{' '}
        </h2>
        <h2>
          {' '}
          <span role="img" aria-label="recovered">
            🛡
          </span>{' '}
          {recovered}{' '}
        </h2>
      </div>
    </div>
  );
};

export default Provinces;
