import type { Meta, StoryObj } from '@storybook/react'
import { Info } from './Info'

const meta = {
  title: 'Atomic/Atoms/Info',
  component: Info,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'BALANCE',
    text: '5000.00',
  },
} satisfies Meta<typeof Info>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
