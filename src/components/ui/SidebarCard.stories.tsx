import type { Meta, StoryObj } from '@storybook/react-vite';
import SideBarCard from './SidebarCard';
import '../../index.css';

const meta: Meta<typeof SideBarCard> = {
    title: 'UI/SideBarCard',
    component: SideBarCard,
    args: {
        label: 'Total Patients',
        number: 247,
        variant: 'total',
    },
    argTypes: {
        variant: {
            control: {type: 'radio'},
            options: ['total', 'waiting', 'consult', 'done',  'cancelled'],
        },
        label: {
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
    variant: 'waiting',
    label: 'Waiting',
    number: 5,
  },
};

export const Consult: Story = {
  args: {
    variant: 'consult',
    label: 'In Consult',
    number: 224,
  },
};
export const Done: Story = {
  args: {
    variant: 'done',
    label: 'Done',
    number: 350,
  },
};
export const Cancelled: Story = {
  args: {
    variant: 'cancelled',
    label: 'Cancelled',
    number: 224,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="mt-4 flex lg:flex-col gap-4">
        <SideBarCard label="Total Patients" number={247} />
        <SideBarCard variant="waiting" label="Waiting" number={18} />
        <SideBarCard variant="consult" label="In consult" number={5} />
        <SideBarCard variant="done" label="Done" number={224} />
        <SideBarCard variant="cancelled" label="Cancelled" number={2} />
    </div>
  ),
};  