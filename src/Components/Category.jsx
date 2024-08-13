import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

function Category({ category, availableWidgets, addWidget, removeWidget }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddWidget = (widgetID, widgetText) => {
    const widget = availableWidgets.find(w => w.id === widgetID);
    if (widget) {
      addWidget(category.id, { ...widget, text: widgetText });
      setShowAddForm(false);
    }
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => removeWidget(category.id, widget.id)}
          />
        ))}
        <button onClick={() => setShowAddForm(!showAddForm)}>+ Add Widget</button>
        {showAddForm && (
          <AddWidgetForm
            availableWidgets={availableWidgets.filter(
              widget => !category.widgets.find(w => w.id === widget.id)
            )}
            onAddWidget={handleAddWidget}
            onCancel={() => setShowAddForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Category;
