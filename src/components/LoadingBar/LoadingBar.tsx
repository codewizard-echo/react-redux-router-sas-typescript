import { FC } from "react";
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  getLoadingStatus,
  hideLoading,
  showLoading,
} from "../../services/reducers/sharedReducer";

import styles from "./styles.module.scss";

interface FuncGroup {
  className?: string;
  props?: any;
}
const LoadingBar: FC<FuncGroup> = ({ className = "", ...props }) => {
  const loading = useAppSelector(getLoadingStatus);

  return (
    <Oval
      visible={loading}
      wrapperClass={cn([
        className,
        styles.loadingComponent,
        loading ? styles.active : styles.inactive,
      ])}
      color={"#0ead69"}
      width={100}
      height={100}
      {...props}
    />
  );
};

export const useShowLoadingBar = () => {
  const dispatch = useAppDispatch();
  const showLoadingBar = () => dispatch(showLoading());

  return showLoadingBar;
};

export const useHideLoadingBar = () => {
  const dispatch = useAppDispatch();
  const hideLoadingBar = () => dispatch(hideLoading());

  return hideLoadingBar;
};

export const useLoadingBars = () => {
  const dispatch = useAppDispatch();
  const showLoadingBar = () => dispatch(showLoading());
  const hideLoadingBar = () => dispatch(hideLoading());

  return [showLoadingBar, hideLoadingBar];
};

export default LoadingBar;
