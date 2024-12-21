'use client';

import { ChildrenProps } from '@/@interfaces/global/global';

interface HeadingProps {
  center?: boolean;
  children: React.ReactNode;
}

const Heading = ({ center, children }: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>{children}</div>
  );
};

const HeadingTitle = ({ children }: ChildrenProps) => {
  return <h3>{children}</h3>;
};

const HeadingSubtitle = ({ children }: ChildrenProps) => {
  return <p className="text-red-700">{children}</p>;
};

export { Heading, HeadingTitle, HeadingSubtitle };
