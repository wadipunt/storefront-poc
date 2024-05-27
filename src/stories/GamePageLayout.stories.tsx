import type {  Meta, StoryObj } from '@storybook/react';
import GamePageLayout from '@/components/GamePageLayout';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/GamePageLayout',
  component: GamePageLayout,
  parameters: {

  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof GamePageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    header:<div className='w-full h-full '> header</div>,
    sideBar: <></>,
    gameInfo: <div  > gameInfo</div>,
    hero: <div className='bg-grey w-full   h-full'> hero</div>,
    footer: <div></div>
  },
};
