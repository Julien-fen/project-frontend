import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/classes`)
      .then(response => setClasses(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Classes</h2>
      <ul>
        {classes.map(cls => (
          <li key={cls.id}>
            Classe {cls.number}: {cls.description || 'Pas de description'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
