import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import Counter from '../lessons/05-testing-effects'

afterEach(() => {
  window.localStorage.removeItem('count')
  cleanup() // <-- required for codesandbox for some reason...
})

test('counter increments the count', () => {
  const {container} = render(<Counter />)
  const button = container.firstChild
  expect(button.textContent).toBe('0')
  fireEvent.click(button)
  expect(button.textContent).toBe('1')
})

test('reads and updates localStorage', () => {
  window.localStorage.setItem('count', 3)
  const {container, rerender} = render(<Counter />)
  const button = container.firstChild
  expect(button.textContent).toBe('3')
  fireEvent.click(button)
  expect(button.textContent).toBe('4')
  rerender(<Counter />)
  expect(window.localStorage.getItem('count')).toBe('4')
})
