import { FC } from 'react';
import './styles.scss';

interface ComProps {
	children?: any;
};

const Footer: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<div className='kut-footer'>
			Footer
		</div>
	)
};

export default Footer;
