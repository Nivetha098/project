import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [data, setData] = useState([]);

    const fetchData = () => {

      fetch('https://randomuser.me/api')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    
    
  }
  useEffect (()=> {
    fetchData();

  },[])
  function refreshData() {
    fetchData();
  }
  return (
    <div>

      <h1>Fetched Data</h1>
      <button onClick={refreshData}>REFRESH</button>
      <ul>
        { data?.results?.map((item) => (
          <li key ={item.gender}>
            Person name: {item.name.title}<span>.</span>  
          <span>{item.name.first}&nbsp;
           {item.name.last}</span> 

            <br />
            Person email: {item.email}
          </li>
        ))}


        
      </ul>
    </div>
  );
}

export default UserProfile;
