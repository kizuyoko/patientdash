type FooterItemProps = {
    src: string;
    link: string;
    alt: string;
}

const Footer = ({ src, link, alt }: FooterItemProps ) => {
    return (
			<a 
				href={link} 
				target="_blank" 
				rel="noopener noreferrer"
			>
				<img 
					src={src} 
					alt={alt} 
					width={30} 
					height={30}
					className="transition-transform duration-200 hover:scale-110"
				/>
			</a>
    );
}

export default Footer;