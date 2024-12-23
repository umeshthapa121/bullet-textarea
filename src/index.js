import React, { useState } from 'react';

const BulletTextarea = ({ defaultValue = '', onChange }) => {
  const [value, setValue] = useState(defaultValue || '❖ ');

  const handleInputChange = (event) => {
    setValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      setValue((prevValue) => prevValue + '\n❖ ');
    }
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        style={{ width: '400px', height: '200px' }}
      />
    </div>
  );
};

export default BulletTextarea;
