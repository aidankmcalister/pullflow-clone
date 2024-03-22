import { render } from '@redwoodjs/testing/web'

import Plans from './Plans'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Plans', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Plans />)
    }).not.toThrow()
  })
})
