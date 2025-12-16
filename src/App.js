import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState(["1", "2", "3", "4", "5","0","6","7","8","9"]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  const handleDrop = (dropIndex) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    const updated = [...items];
    const draggedItem = updated[dragIndex];

    updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, draggedItem);

    setItems(updated);
    setDragIndex(null);
  };

  return (
    <div className="container">
      <h2>Drag & Drop Digits</h2>
      <p>Drag the boxes to reorder the digits 0-9.</p>

      <div className="list">
        {items.map((item, index) => (
          <div
            key={item}
            className={`box ${dragIndex === index ? "dragging" : ""}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <p>Tip: Try reordering to make 0123456789 or reverse it!</p>
    </div>
  );
}