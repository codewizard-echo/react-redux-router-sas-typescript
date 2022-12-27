import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import LoadingBar from './components/LoadingBar/LoadingBar';

import './assets/sass/app.scss';
import AppRouter from './routes';

interface ComProps {
	children?: any;
};

const App: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<>
			<ToastContainer autoClose={8000} />
			<LoadingBar />
			<AppRouter />
		</>
	)
};

export default App;
