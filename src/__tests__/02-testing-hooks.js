import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Counter from '../lessons/02-testing-hooks'

test('counter increments the count', () => {
  const {container} = render(<Counter />)
  const button = container.firstChild
  expect(button.textContent).toBe('0')
  fireEvent.click(button)
  expect(button.textContent).toBe('1')
})
