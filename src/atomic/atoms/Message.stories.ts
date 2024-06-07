import type { Meta, StoryObj } from '@storybook/react'
import { Message, MessageProps } from './Message'

const meta: Meta<typeof Message> = {
  title: 'Atomic/Atoms/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<MessageProps>;

export const Betting: Story = {
  args: {
    message: {
      gameState: 'BETTING',
    },
  },
}

export const Play1Position: Story = {
  args: {
    message: {
      gameState: 'PLAY',
      computerBet: 'ROCK',
      userBets: ['SCISSORS'],
    },
  },
}

export const Play2Position: Story = {
  args: {
    message: {
      gameState: 'PLAY',
      computerBet: 'ROCK',
      userBets: ['PAPER', 'SCISSORS'],
    },
  },
}

export const ResultWin: Story = {
  args: {
    message: {
      gameState: 'RESULT',
      amount: '500.00',
      winner: 'PLAYER',
      userBetPosition: 'PAPER',
    },
  },
}

export const ResultLoss: Story = {
  args: {
    message: {
      gameState: 'RESULT',
      amount: '1500.00',
      winner: 'COMPUTER',
      userBetPosition: 'PAPER',
    },
  },
}
