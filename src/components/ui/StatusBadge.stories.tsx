import type { Meta, StoryObj } from '@storybook/react-vite';
import StatusBadge from './StatusBadge';
import '../../index.css';

const meta: Meta<typeof StatusBadge> = {
    title: 'UI/StatusBadge',
    component: StatusBadge,
    args: { status: 'active' },
    argTypes: {
        status: {
            control: { type: 'radio'},
            options: ['active', 'pending', 'completed']
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'StatusBadge with status.',
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof StatusBadge>;


export const Active: Story = {
    args: { status: 'active'}
};

export const Pending: Story = {
    args: { status: 'pending'}
};

export const Completed: Story = {
    args: { status: 'completed'}
};

export const AllLevels: Story = {
  render: () => (
    <div className="flex gap-4">
        <StatusBadge status="active" />
        <StatusBadge status="pending"  />
        <StatusBadge status="completed"  />
    </div>
  ),
}; 