import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { PlayZone } from './PlayZone'

const meta = {
  title: 'Atomic/Organisms/PlayZone',
  component: PlayZone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: () => {},
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PlayZone>

export default meta
type Story = StoryObj<typeof meta>

export const Bet0: Story = {
  args: {
    bet: 0,
    positionTypes: 'PAPER',
  },
}

export const Bet500: Story = {
  args: {
    bet: 500,
    positionTypes: 'ROCK',
  },
}

export const Bet1500: Story = {
  args: {
    bet: 1500,
    positionTypes: 'SCISSORS',
  },
}
