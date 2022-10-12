import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonRootProps {
  children: ReactNode;
}

function ButtonRoot({ children }: ButtonRootProps) {
  return <div>{children}</div>;
}

ButtonRoot.displayName = 'Button.Root';

export interface ButtonSolidProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

function ButtonSolid({
  children,
  asChild,
  className,
  ...props
}: ButtonSolidProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        `py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full
        transition-colors hover:bg-cyan-300 focus:ring-2 ring-white`,
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonSolid.displayName = 'Button.Solid';

export interface ButtonOutlineProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

function ButtonOutline({
  children,
  asChild,
  className,
  ...props
}: ButtonOutlineProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        `py-3 px-4 bg-none rounded font-semibold text-cyan-500 text-sm w-full
        transition-colors ring-2 ring-cyan-500 hover:ring-cyan-300 focus:ring-white
        focus:text-gray-900 focus:bg-cyan-500`,
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

ButtonOutline.displayName = 'Button.Outline';

export const Button = {
  Root: ButtonRoot,
  Solid: ButtonSolid,
  Outline: ButtonOutline,
};
