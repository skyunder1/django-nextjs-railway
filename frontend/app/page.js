'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API URL will be set via environment variable
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    
    // Fetch hello endpoint
    fetch(`${apiUrl}/api/hello/`)
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => console.error('Error fetching hello:', err));
    
    // Fetch items endpoint
    fetch(`${apiUrl}/api/items/`)
      .then(res => res.json())
      .then(data => {
        setItems(data.items || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching items:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Next.js + Django on Railway</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>API Status</h2>
        {apiData ? (
          <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
            <p>Message: {apiData.message}</p>
            <p>Status: {apiData.status}</p>
          </div>
        ) : (
          <p>Loading API...</p>
        )}
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Items from API</h2>
        {loading ? (
          <p>Loading items...</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <strong>{item.name}</strong>: {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}