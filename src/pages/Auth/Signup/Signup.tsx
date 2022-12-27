import { FC } from 'react';
import './styles.scss';

interface ComProps {
	children?: any;
};

const Signup: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<>
				Signup Page
		</>
	)
};

export default Signup;
