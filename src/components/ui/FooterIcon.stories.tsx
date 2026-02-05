import type { Meta, StoryObj } from '@storybook/react-vite';
import FooterIcon from './FooterIcon';
import gitHubImage from '../../assets/github.svg';
import linkedInImage from '../../assets/linkedin.svg';
import '../../index.css';

const meta: Meta<typeof FooterIcon> = {
    title: 'UI/FooterIcon',
    component: FooterIcon,
    parameters: {
      docs: {
        description: {
          component: 'Reusable footer icon UI component.',
        },
      },
    },
  }

  export default meta;
  type Story = StoryObj<typeof FooterIcon>;
  
  export const GitHub: Story = {
    args: {
      src: gitHubImage,
      link: 'https://github.com/kizuyoko/patientdash',
      alt: 'GitHub',
    },
  };
  
  export const LinkedIn: Story = {
    args: {
      src: linkedInImage,
      link: 'https://www.linkedin.com/in/kizuyoko/',
      alt: 'LinkedIn',
    },
  };

  export const Both: Story = {
    render: () => (
      <footer>
        <ul style={{ display: 'flex', gap: '12px' }}>
          <li>
            <FooterIcon
              src={gitHubImage}
              link="https://github.com/kizuyoko/patientdash"
              alt="GitHub"
            />
          </li>
          <li>
            <FooterIcon
              src={linkedInImage}
              link="https://www.linkedin.com/in/kizuyoko/"
              alt="LinkedIn"
            />
          </li>
        </ul>
      </footer>
    ),
  };