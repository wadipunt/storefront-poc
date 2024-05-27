import type { Meta, StoryObj } from '@storybook/react';
import WinsTable from '@/components/WinsTable';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/WinsTable',
  component: WinsTable,
  parameters: {

  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    winRecords: {
      control: {
        type: 'object'
      }
    }
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof WinsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    winRecords: [
      {
        "rank": 1,
        user: undefined,
        "date": "August 23, 2023",
        "bet": 9000000000000,
        "mutiplier": 18,
        "payout": 158670000000000
      },
      {
        "rank": 2,
        user: undefined,
        "date": "August 23, 2023",
        "bet": 498200003,
        "mutiplier": 15,
        "payout": 7274218249
      },
      {
        "rank": 3,
        user: undefined,
        "date": "August 23, 2023",
        "bet": 4658000,
        "mutiplier": 1074,
        "payout": 158670000000000
      }
    ]
  },
};
