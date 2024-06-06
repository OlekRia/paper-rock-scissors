import type { Meta, StoryObj } from '@storybook/react'
import { Position } from './Position'
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'Atomic/Molecules/Position',
  component: Position,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: action('Position clicked'),
    onContextMenu: action('On Context Menu clicked!'),
  },
} satisfies Meta<typeof Position>

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
