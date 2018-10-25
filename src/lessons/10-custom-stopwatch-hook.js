import React, {useReducer, useRef, useEffect} from 'react'

function reducer(currentState, newState) {
  return {...currentState, ...newState}
}

function useStopwatch() {
  const [{running, lapse}, setState] = useReducer(reducer, {
    running: false,
    lapse: 0,
  })
  const intervalRef = useRef(null)

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  function handleRunClick() {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        setState({lapse: Date.now() - startTime})
      }, 0)
    }
    setState({running: !running})
  }

  function handleClearClick() {
    clearInterval(intervalRef.current)
    setState({lapse: 0, running: false})
  }

  return {handleRunClick, handleClearClick, lapse, running}
}

function Stopwatch() {
  const stopwatchOne = useStopwatch()
  const stopwatchTwo = useStopwatch()

  return (
    <div style={{textAlign: 'center'}}>
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {stopwatchOne.lapse}
        ms
      </label>
      <button onClick={stopwatchOne.handleRunClick} style={buttonStyles}>
        {stopwatchOne.running ? 'Stop' : 'Start'}
      </button>
      <button onClick={stopwatchOne.handleClearClick} style={buttonStyles}>
        Clear
      </button>
      <hr />
      <strong>Lapse Difference:</strong>
      <span>
        {stopwatchOne.lapse - stopwatchTwo.lapse}
        ms
      </span>
      <hr />

      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {stopwatchTwo.lapse}
        ms
      </label>
      <button onClick={stopwatchTwo.handleRunClick} style={buttonStyles}>
        {stopwatchTwo.running ? 'Stop' : 'Start'}
      </button>
      <button onClick={stopwatchTwo.handleClearClick} style={buttonStyles}>
        Clear
      </button>
    </div>
  )
}

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}

export default Stopwatch
