import { render } from '@redwoodjs/testing/web'

import VideoContainer from './VideoContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideoContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoContainer />)
    }).not.toThrow()
  })
})
