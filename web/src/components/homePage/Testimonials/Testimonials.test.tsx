import { render } from '@redwoodjs/testing/web'

import Testimonials from './Testimonials'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Testimonials', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Testimonials />)
    }).not.toThrow()
  })
})
