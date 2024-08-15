import React, { useState } from 'react';
import './css/Recommendation.css';

function Recommendation() {
  const [recommendations, setRecommendations] = useState([
    'Great work on the project!',
    'Very informative and well-presented.',
    'Excellent attention to detail.'
  ]);
  
  const [newRecommendation, setNewRecommendation] = useState('');

  const handleInputChange = (event) => {
    setNewRecommendation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newRecommendation.trim()) {
      setRecommendations([...recommendations, newRecommendation]);
      setNewRecommendation('');
      alert('Recommendation added successfully!');
    } else {
      alert('Please enter a recommendation.');
    }
  };

  return (
    <div className="App">
      <h1>Recommendations</h1>
      <ul id="recommendation-list">
        {recommendations.map((rec, index) => (
          <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '5px' }}>
            {rec}
          </li>
        ))}
      </ul>
      <form id="recommendation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="recommendation-input"
          value={newRecommendation}
          onChange={handleInputChange}
          placeholder="Enter a recommendation"
          style={{ padding: '10px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Add Recommendation</button>
      </form>
    </div>
  );
}

export default Recommendation;
