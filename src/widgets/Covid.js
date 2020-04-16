import React, { useState, useEffect } from 'react';
import Provinces from './Provinces';

const Covid = () => {
  const [hasError, setErrors] = useState(false);
  const [provinces, setProvinces] = useState({});

  const dateformat = require('dateformat');

  async function fetchData() {
    const result = await fetch(
      'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
          'x-rapidapi-key':
            '920767e39amsha50bf0f39380cd2p169483jsnd1a1c7865e50',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );

    result
      .json()
      .then(result => setProvinces(result))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <div className="lastChecked">
        {Object.keys(provinces)
          .slice(0, 1)
          .map(date => (
            <div key={date}>
              Last update :{' '}
              {dateformat(Date(provinces.data.lastChecked), 'fullDate')}
            </div>
          ))}
      </div>
      {!hasError ? (
        <div>
          {Object.keys(provinces)
            .slice(0, 1)
            .map(item => (
              <div key={item}>
                <div className="container">
                  {provinces.data.covid19Stats.map(item => (
                    <div key={item.keyId}>
                      <Provinces
                        province={item.province}
                        confirmed={item.confirmed}
                        deaths={item.deaths}
                        recovered={item.recovered}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <span>
          <h1>Error is occured while fetching the data..</h1>
        </span>
      )}
    </>
  );
};
export default Covid;
