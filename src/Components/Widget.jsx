import React from 'react';
import { renderGraph } from '../utils/graphUtils';
import './Widget.css';

const Widget = ({ title, type, data, removeWidget }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      {renderGraph(type, data)}
      <button className="remove-widget-button" onClick={removeWidget}>X</button>
    </div>
  );
};

export default Widget;

