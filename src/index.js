import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div
      style={{
        padding: 30,
        height: '100vh',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>look in the lessons directory</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
