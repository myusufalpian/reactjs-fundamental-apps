import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  variant: string,
  text: string,
  classname: string,
  onClick: () => void
}

const Button = (props: Props) : JSX.Element => {
    const {children = "Submit", variant = "bg-neutral-700", text = "text-white", classname, onClick} = props;
    return (
        <button onClick={onClick} className={`h-10 px-6 rounded-md ${variant} ${text} drop-shadow-md ${classname}`} type='submit'>{children}</button>
    );
}

export default Button;