import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'
import { PlayZone } from './PlayZone';
import { Message } from '../atoms/Message';

const meta = {
  title: 'Atomic/Organisms/PlayZone',
  component: PlayZone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onBetClick: { action: 'bet clicked' },
  },
  args: {
    bets: [0, 500, 1500],
    children: <div>Hi</div>,
    buttonLabel: 'PLAY',
    onButtonClick: fn(),
    onBetClick: fn(),
  },
} satisfies Meta<typeof PlayZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bets: [0, 500, 1500],
    children: <Message message={{ gameState: 'BETTING' }} />,
  },
};
