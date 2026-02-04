import type { Meta, StoryObj } from '@storybook/react-vite';
import SideBarCard from './SidebarCard';
import '../../index.css';

const meta: Meta<typeof SideBarCard> = {
    title: 'UI/SideBarCard',
    component: SideBarCard,
    args: {
        title: 'Total Patients',
        number: 247,
        variant: 'total',
    },
    argTypes: {
        variant: {
            control: {type: 'radio'},
            options: ['total', 'active', 'pending', 'completed'],
        },
        title: {
            control: 'text',
        },
        number: {
            control: 'number',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Sidebar overview card component with color variants.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof SideBarCard>;


export const Default: Story = {}


export const Pending: Story = {
  args: {
    variant: 'pending',
    title: 'Pending',
    number: 5,
  },
};

export const Completed: Story = {
  args: {
    variant: 'completed',
    title: 'Completed',
    number: 224,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="mt-4 flex lg:flex-col gap-4">
        <SideBarCard title="Total Patients" number={247} />
        <SideBarCard variant="active" title="Active Today" number={18} />
        <SideBarCard variant="pending" title="Pending" number={5} />
        <SideBarCard variant="completed" title="Completed" number={224} />
    </div>
  ),
};  