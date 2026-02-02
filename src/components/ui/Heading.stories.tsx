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
}

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 2
  }
}

export const H1: Story = {
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
