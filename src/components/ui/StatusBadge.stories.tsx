import type { Meta, StoryObj } from '@storybook/react-vite';
import StatusBadge from './StatusBadge';
import '../../index.css';

const meta: Meta<typeof StatusBadge> = {
    title: 'UI/StatusBadge',
    component: StatusBadge,
    args: { status: 'waiting' },
    argTypes: {
        status: {
            control: { type: 'radio'},
            options: ['waiting', 'consult', 'done', 'cancelled']
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


export const Waiting: Story = {
    args: { status: 'waiting'}
};

export const Consult: Story = {
    args: { status: 'consult'}
};

export const Done: Story = {
    args: { status: 'done'}
};

export const Cancelled: Story = {
    args: { status: 'cancelled'}
};

export const AllLevels: Story = {
  render: () => (
    <div className="flex gap-4">
        <StatusBadge status="waiting" />
        <StatusBadge status="consult"  />
        <StatusBadge status="done"  />
        <StatusBadge status="cancelled"  />
    </div>
  ),
}; 