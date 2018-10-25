import React, {useState, Suspense} from 'react'

const Tilt = React.lazy(() => import('./12-react-lazy.tilt'))

function useToggle(init = false) {
  const [on, setOn] = useState(init)
  const toggle = () => setOn(!on)
  return [on, toggle]
}

function App() {
  const [showTilt, toggleTilt] = useToggle()
  return (
    <div>
      <label>
        show tilt
        <input type="checkbox" checked={showTilt} onChange={toggleTilt} />
      </label>

      <div style={{height: 150, width: 200}} className="totally-centered">
        {showTilt ? (
          <Suspense fallback={<div>loading...</div>}>
            <Tilt>
              <div className="totally-centered">vanilla-tilt.js</div>
            </Tilt>
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default App
