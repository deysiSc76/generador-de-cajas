import React, { useState } from 'react';


const ColorBox = ({ color }) => {
  const style = {
    height: '50px',
    width: '50px',
    display: 'inline-block',
    backgroundColor: color,
    margin: '5px'
  };

  return <div style={style} />;
};

const ColorForm = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      setBoxes([...boxes, color]);
      setColor('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Ingrese un nombre de color"
        />
        <button type="submit">Add Color</button>
      </form>
      <div>
        {boxes.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorForm;