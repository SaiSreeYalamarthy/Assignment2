import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Creating a function to print third party api
const UniversityTable = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios.get('http://universities.hipolabs.com/search?country=united%20states')
      .then(response => {
        setUniversities(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {universities.map(university => (
          <tr key={university.name}>
            <td>{university.name}</td>
            <td>{university.country}</td>
            <td>{university.state}</td>
            <td>{university.city}</td>
            <td>{university.web_pages[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UniversityTable;
