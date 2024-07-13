// src/Components/ChangeBackgroundButton.js

import React, { useState, useEffect } from 'react';

const ChangeBackgroundButton = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Blanco por defecto

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const changeBackgroundColor = () => {
    const newColor = backgroundColor === '#19234D' ? '#FFFFFF' : '#19234D'; // Cambia entre azul y blanco
    setBackgroundColor(newColor);
  };

  return (
    <button onClick={changeBackgroundColor}>Change Background</button>
  );
};

export default ChangeBackgroundButton;
