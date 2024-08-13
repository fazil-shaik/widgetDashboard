import React, { useState } from 'react';
import Widget from './Widget';
import './Dashboard.css';

const Dashboard = ({ widgetData, removeWidget }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Function to filter widgets based on search term
  const filteredWidgetData = Object.keys(widgetData).reduce((acc, category) => {
    const filteredWidgets = widgetData[category].filter(widget =>
      widget.title.toLowerCase().includes(searchTerm)
    );
    if (filteredWidgets.length > 0) {
      acc[category] = filteredWidgets;
    }
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      {Object.keys(filteredWidgetData).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="widgets">
            {filteredWidgetData[category].map((widget) => (
              <Widget
                key={widget.id}
                title={widget.title}
                type={widget.type}
                data={widget.data}
                removeWidget={() => removeWidget(category, widget.id)} // Pass the removeWidget function with parameters
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
