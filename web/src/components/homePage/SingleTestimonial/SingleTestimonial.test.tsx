import { render } from '@redwoodjs/testing/web'

import SingleTestimonial from './SingleTestimonial'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SingleTestimonial', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleTestimonial />)
    }).not.toThrow()
  })
})
