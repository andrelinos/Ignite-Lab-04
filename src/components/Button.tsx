import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'solid' | 'outline' | 'link';
  children: ReactNode;
}

export function Button({
  children,
  asChild,
  className,
  variant = 'solid',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      name="button"
      className={clsx(
        `py-3 px-4 font-semibold  text-sm w-full rounded
        transition-colors `,
        {
          'bg-cyan-500 rounded text-black hover:bg-cyan-300 focus:ring-2 ring-white':
            variant === 'solid',
          'bg-none ring-2 ring-cyan-500 text-cyan-500 hover:text-black hover:bg-cyan-300 focus:ring-2 hover:ring-white':
            variant === 'outline',
          'rounded text-cyan-500 hover:text-cyan-300': variant === 'link',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
