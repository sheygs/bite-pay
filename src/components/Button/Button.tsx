import { ReactNode } from 'react';

interface Props {
  children?: ReactNode | string;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

export const Button = ({ children, type, onClick }: Props): JSX.Element => (
  <button className="button" onClick={onClick} type={type}>
    {children}
  </button>
);
