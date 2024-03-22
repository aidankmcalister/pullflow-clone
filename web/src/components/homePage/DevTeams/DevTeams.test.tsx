import { render } from '@redwoodjs/testing/web'

import DevTeams from './DevTeams'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DevTeams', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DevTeams />)
    }).not.toThrow()
  })
})
