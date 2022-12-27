import { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

interface ComProps {
	children?: any;
};

const Dashboard: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<>
			Dashboard
			<div><Link to="/signin">Click here to signin</Link></div>
			<div><Link to="/signup">Click here to signup</Link></div>
		</>
	)
};

export default Dashboard;
