import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  href: string;
};

const SocialLink = ({ children, href }: Props) => {
  return (
    <Link className=" text-white hover:text-blue-400 cursor-pointer" target="_blank" href={href}>
      {children}
    </Link>
  );
};

export default SocialLink;
