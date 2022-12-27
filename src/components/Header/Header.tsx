import { FC } from 'react';
import './styles.scss';

interface ComProps {
	children?: any;
};

const Header: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<div className='kut-header'>
			Header
		</div>
	)
};

export default Header;
