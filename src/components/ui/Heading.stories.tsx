import type { Meta, StoryObj } from '@storybook/react-vite';
import Heading from './Heading';
import '../../index.css';

const meta: Meta<typeof Heading> = {
  title: 'UI/Heading',
  component: Heading,
  args: {
    level: 2,
    children: 'Patient List',
  },
  argTypes: {
    level: {
      control: { type: 'radio' },
      options: ['h1', 'h2', 'h3', 'h4'],
    },
  },
}

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {}

export const H2: Story = {
  args: {
    level: 1,
    children: 'MediTech',
  },
}

export const H3: Story = {
  args: {
    level: 3,
    children: 'Section title',
  },
}
