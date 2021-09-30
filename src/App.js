import React from 'react'
import ColoredUserpic from './ColoredUserpic';

function App() {
  return (
    <ColoredUserpic 
      src='./Cat.jpg' 
      size={150}
      margin={4}
      backgroundColor='red'
      colors={['green', 'blue']}
      hoverColors={['blue', 'green', 'purple']}
      colorWidth={6}
    />
  )
}

export default App;
