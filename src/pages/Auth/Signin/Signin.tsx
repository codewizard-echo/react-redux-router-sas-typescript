import { FC } from 'react';
import { useAppDispatch } from '../../../services/hooks';
import { userLogin } from '../../../services/reducers/userReducer';
import './styles.scss';

interface ComProps {
	children?: any;
};

const Signin: FC<ComProps> = ({
	children = ""
}) => {
	const dispatch = useAppDispatch();

	const onLogin = () => {
		dispatch(userLogin());
	}

	return (
		<>
			Signin Page
			<button onClick={onLogin}>Click to Login</button>
		</>
	)
};

export default Signin;
