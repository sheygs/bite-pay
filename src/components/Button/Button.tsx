import { ReactNode } from 'react';

interface Props {
        children?: ReactNode | string;
        type?: 'submit' | 'button';
        onClick?: () => void;
}

const Button = ({ children, type, onClick }: Props): JSX.Element => {
        return (
                <button className="button" onClick={onClick} type={type}>
                        {children}
                </button>
        );
};

export default Button;
