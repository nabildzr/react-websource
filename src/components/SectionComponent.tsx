import { IChildren } from "../interfaces/children";

const Section = ({ children, className }: IChildren) => {
  return <div className={`w-full px-5 md:px-0 ${className}`}>{children}</div>;
};

export default Section;
