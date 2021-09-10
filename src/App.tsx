import { ThemeContext } from 'app/themeContext';
import React, { useState } from 'react';
import { Routes } from 'Routes';
import AuthInit from './features/auth/_redux/authInit';
function App() {
  const [viewFull, setViewFull] = useState<boolean>(true);
  return (
    <ThemeContext.Provider value={{ viewFull, setViewFull }}>
      <AuthInit>
        <Routes />
      </AuthInit>
    </ThemeContext.Provider>
  );
}

export default App;
