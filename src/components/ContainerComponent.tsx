import { IChildren } from "../interfaces/children";

const Container = ({  children,  className, }: IChildren) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Container;
