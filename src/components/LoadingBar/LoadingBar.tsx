import { FC } from "react";
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

interface FuncGroup {
	className?: string;
	props?: any;
}
const LoadingBar: FC<FuncGroup> = ({
	className = "",
	...props
}) => {
	const loading = useSelector((state: any) => state.shared.loading);

	return (
		<Oval visible={loading} wrapperClass={`${styles.loadingComponent} ${className} ${loading?styles.active:styles.inactive}`} color={"#0ead69"} width={100} height={100} />
	);

};

export default LoadingBar;
