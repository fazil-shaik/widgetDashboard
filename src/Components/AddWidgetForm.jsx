import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './AddWidgetForm.css';

const AddWidgetForm = ({ isVisible, addWidget, closeForm, categories }) => {
  const [widgetTitle, setWidgetTitle] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');

  const handleAddWidget = () => {
    if (!widgetTitle || !widgetText) {
      alert('Please fill in all fields.');
      return;
    }

    const newWidget = {
      id: Date.now(),
      title: widgetTitle,
      text: widgetText,
      type: 'pie', // Default type or you can add type selection
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [50, 50],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384']
          }
        ]
      }
    };

    addWidget(selectedCategory, newWidget);
  };

  return (
    <div className={`add-widget-form-container ${isVisible ? 'visible' : ''}`}>
      <form className="add-widget-form">
        <h2>Personalize your dashboard by adding widgets</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetTitle}
          onChange={(e) => setWidgetTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <div className="form-buttons">
          <button type="button" onClick={closeForm}>Cancel</button>
          <button type="button" onClick={handleAddWidget}>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default AddWidgetForm;
