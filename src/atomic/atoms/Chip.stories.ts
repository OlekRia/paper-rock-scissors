import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'

const meta = {
  title: 'Atomic/Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    number: 0,
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    number: 500,
  },
}
