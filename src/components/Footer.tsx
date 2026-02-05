import linkedInImage from '../assets/linkedin.svg';
import gitHubImage from '../assets/github.svg';
import FooterIcon from './ui/FooterIcon';

const Footer = () => {
    return (
        <footer>
          <ul>
            <li>
              <FooterIcon 
                src={gitHubImage} 
                link="https://github.com/kizuyoko/patientdash" 
                alt="GitHub" />
            </li>
            <li>
              <FooterIcon 
                src={linkedInImage} 
                link="https://www.linkedin.com/in/kizuyoko/" 
                alt="LinkedIn" />
            </li>
          </ul>
        </footer>
    )
}

export default Footer;