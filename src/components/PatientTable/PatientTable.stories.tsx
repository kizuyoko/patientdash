import type { Meta, StoryObj } from '@storybook/react-vite';
import PatientTable from './PatientTable';
import "../../index.css";

const meta: Meta<typeof PatientTable> = {
    title: "Components/PatientTable",
    component: PatientTable,
    parameters: {
        docs: {
            description: {
                component: "Table to show overview of the patients",
            },
        },
    },

}

export default meta;

type Story = StoryObj<typeof PatientTable>;

export const Default: Story = {};