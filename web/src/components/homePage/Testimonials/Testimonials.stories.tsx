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

import Testimonials from './Testimonials'

const meta: Meta<typeof Testimonials> = {
  component: Testimonials,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Testimonials>

export const Primary: Story = {}
