// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import VideoContainer from './VideoContainer'

const meta: Meta<typeof VideoContainer> = {
  component: VideoContainer,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof VideoContainer>

export const Primary: Story = {}
