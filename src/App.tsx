import React from 'react';

const App = () => {
  // 👇️ type event as React.KeyboardEvent<HTMLElement>
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    console.log(event.key);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        defaultValue=""
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default App;
