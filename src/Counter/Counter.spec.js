import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from './Counter'

test('counter increments the count', () => {
  const { container } = render(<Counter />)
  const button = container.firstChild
  console.log(button.textContent)
  expect(button.textContent).toBe('Using useState: 0')
  fireEvent.click(button)
  expect(button.textContent).toBe('Using useState: 1')
})