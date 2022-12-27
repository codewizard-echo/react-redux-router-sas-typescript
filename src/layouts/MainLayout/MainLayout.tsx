import { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './styles.scss';

interface ComProps {
	children?: any;
};

const MainLayout: FC<ComProps> = ({
	children = ""
}) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
};

export default MainLayout;
