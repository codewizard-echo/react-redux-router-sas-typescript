// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ResponseProps<T = any> {
  status: number;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: T;
}
