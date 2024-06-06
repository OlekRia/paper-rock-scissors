import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Pit } from './Pit'

const meta = {
  title: 'Atomic/Atoms/Pit',
  component: Pit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: () => {},
  },
  args: {
    onClick: fn(),
    positionType: 'PAPER',
    bet: 0,
    children: undefined,
  },
} satisfies Meta<typeof Pit>

export default meta
type Story = StoryObj<typeof meta>

export const Paper: Story = {
  args: {
    positionType: 'PAPER',
    children: "AAA"
  },
}

export const Rock: Story = {
  args: {
    positionType: 'ROCK',
  },
}

export const Scissors: Story = {
  args: {
    positionType: 'SCISSORS',
  },
}
