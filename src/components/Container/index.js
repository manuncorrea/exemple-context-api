import React from 'react';

import { useTheme, themes } from '../../context/Theme';

export default function Conteiner({ children }) {
  const { theme, setTheme } = useTheme();

  return(
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.text
      }}
    >
      {children}

      <hr />

      <button onClick={() => setTheme(theme.name === 'dark' ? themes[1] : themes[0])}>
        Switch Theme
      </button>

    </div>
  )
}